const sections = $("section");
const display = $(".maincontent");
const sideMenu = $(".scroll-menu");
const menuItems = sideMenu.find(".scroll-menu__item");

const mobileDetect = new MobileDetect(window.navigator.userAgent);

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
    const position = sectionEq * -100;

    if (isNaN(position)) {
        console.error("передано не верное значение в countSectionPosition");
        return 0;
    }


    return position;
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = sectionEq => {


    if (inScroll) return;
    inScroll = true;

    const transitionOver = 1300;
    const mouseInertiaOver = 300;

    const position = countSectionPosition(sectionEq);
        
    

    display.css({
        transform: `translateY(${position}%)`,
    });

    resetActiveClassForItem(sections, sectionEq, "active");


    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

       

        setTimeout(() => {
            inScroll = false;

            resetActiveClassForItem(menuItems, sectionEq, "scroll-menu__item--active");

            sideMenu
                .find(".scroll-menu__item")
                .eq(sectionEq)
                .addClass("scroll-menu__item--active")
                .siblings()
                .removeClass("scroll-menu__item--active");

            

        }, transitionOver + mouseInertiaOver);

        
    

    
};

const viewportScroller = () => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();


    return {
        next() {
          if (nextSection.length) {
            performTransition(nextSection.index());
            }  
        },
        
        prev() {
            if (prevSection.length) {
                performTransition(prevSection.index());
            }
        }

         
    };


    
}

$(window).on("wheel", e =>{
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewportScroller();

    if (deltaY  > 0) {
        scroller.next();
    }

    if (deltaY < 0 ) {
        scroller.prev();
    }
    
});

$(window).on("keydown", e => {

    const tagName = e.target.tagName.toLowerCase();
    const userTypingInputs = tagName == "input" || tagName == "textarea";
    const scroller = viewportScroller();

    if (userTypingInputs) return; 
        
    switch (e.keyCode) {
        case 38:
            scrollViewport("prev");
            break;
    
        case 40:
            scrollViewport("next");
            break;
                   
        }
    

});

$(".wrapper").on("touchmove", e => e.preventDefault());


$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
    
});

if (isMobile) {
    $("body").swipe ({
        swipe: function (event, direction,) {
            const scroller = viewportScroller();
            let scrollDirection = "";
    
            if (direction == "up") scrollDirection = "next";
            if (direction == "down") scrollDirection = "prev";
            
            scroller[scrollDirection]();
        },
    });
}


//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin



