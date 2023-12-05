const slider = $(".shop__slider").bxSlider({
    pager: false,
    controls: false
});


$('.arrow__button-prev').click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
})


$('.arrow__button-next').click(e =>{
    e.preventDefault();

    slider.goToNextSlide();
})
