// async function initMap() {
//     await ymaps3.ready;

//     const {YMap, YMapDefaultSchemeLayer} = ymaps3;

//     const map = new YMap(
//         document.getElementById('app'),
//         {
//             location: {
//                 center: [37.588144, 55.733842],
//                 zoom: 10
//             }
//         }
//     );

//     map.addChild(new YMapDefaultSchemeLayer());
// }

// initMap();






let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.93916998692174, 30.309015096732622],
    zoom: 11,
    controls: [],
  });

  let coords = [
      [59.94554327989287, 30.38935262114668],
      [59.91142323563909, 30.50024587065841],
      [59.88693161784606, 30.319658102103713],
      [59.97033574821672, 30.315194906302924],
    ],
    myCollection = new ymaps.GeoObjectCollection(
      {},
      {
        draggable: false,
        iconLayout: "default#image",
        iconImageHref: "../img/map.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52],
      }
    );

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable("scrollZoom");
};

ymaps.ready(init);

// ymaps.ready(init);
// function init() {
//     var myMap = new ymaps.Map("map-yandex", {
//         center: [55.022, 82.93],
//         zoom: 12.4,
//         controls: ['zoomControl']
//     }), 

//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark = new ymaps.Placemark([55.021191, 82.919699], {
//         hintContent: 'Магазин 1',
//     }, {
//         iconLayout: 'default#image',
//         iconImageHref: 'img/icons/map-icon.png',
//         iconImageSize: [46, 57],
//     }),
    
//     myPlacemark2 = new ymaps.Placemark([54.981975, 82.869428], {
//         hintContent: 'Магазин 2',
//     }, {
//         iconLayout: 'default#image',
//         iconImageHref: 'img/icons/map-icon.png',
//         iconImageSize: [46, 57],
//     }),
    
//     myPlacemark3 = new ymaps.Placemark([54.994209, 82.984605], {
//         hintContent: 'Магазин 3',
//     }, {
//         iconLayout: 'default#image',
//         iconImageHref: 'img/icons/map-icon.png',
//         iconImageSize: [46, 57],
//     }),

//     myPlacemark4 = new ymaps.Placemark([55.058992, 82.911749], {
//         hintContent: 'Магазин 4',
//     }, {
//         iconLayout: 'default#image',
//         iconImageHref: 'img/icons/map-icon.png',
//         iconImageSize: [46, 57],
//     });

//     myMap.geoObjects
//     .add(myPlacemark)
//     .add(myPlacemark2)
//     .add(myPlacemark3)
//     .add(myPlacemark4);

//     myMap.behaviors.disable('scrollZoom');
// }