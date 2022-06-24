import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction : 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletClass : 'swiper-pagination-bullet',
      clickable : true,
      currentClass :'swiper-pagination-current',
    },
  
 
  
 
  });


//map 

let center = [45.03547,38.975313];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 5
	});

	// let placemark1 = new ymaps.Placemark(center, {
		// balloonContent: `
		// 	<div class="balloon">
		// 		<div class="balloon__address">г. Париж</div>
		// 		<div class="balloon__contacts">
		// 			<a href="tel:+7999999999">+7999999999</a>
		// 		</div>
		// 	</div>
		// `
	// }, {
	// 	iconLayout: 'default#image',
	// 	iconImageHref: 'https://cdn-icons-png.flaticon.com/512/58/58960.png',
	// 	iconImageSize: [40, 40],
	// 	iconImageOffset: [-19, -44]
	// });



	

  var coords = [
    [45.03547,38.975313],
  [47.017945,39.391934],
  [52.239195,40.342139],
  [53.199681,50.262375],
  [54.309291,50.262376],
  [54.220874,50.262377],
  [55.430901,50.262387],
  [56.636783,50.262379],
  [53.756344,50.262380],
  [56.250896765670326,50.262381],
  [56.326797,50.262382],
  [56.326797,50.262383],
  [56.326797,50.262384],
  [54.468108,50.262385],
  [54.471738,50.262386],
  [54.938855,50.262387],
  [55.061003,50.262388],
  [55.103034,50.262389],
  [55.37304,50.262390],
  [55.328336053967355,50.262391],
  [55.32840180787991,50.262392],
  [55.437174,50.262393],
  [55.43718009964942,50.262394],
  [55.43716790001437,50.262395],
  [55.464664,50.262396],
  [55.726761,50.262397],
  [55.873454,50.262398],
  [55.888604,50.262399],
  [55.922071,50.262400],
  [55.755864,50.262401],
  [55.755863999606625,50.262402],
  [55.818653878331176,50.262403],
  [55.81981362332687,50.262404],
  [55.868824,50.262405],
  [55.941889,50.262406],
  [56.016748,50.262407],
  [55.992976,50.262408],
  [55.930806,50.262409],
  [55.920179,50.262410],
  [56.110902,50.262411],
  [56.480241,50.262412],
  [56.556517,50.262413],
  [56.736345,50.262414],
  [56.966803,50.262415],
  [58.0262,50.262416],
  [58.04864,50.262417],
  [57.877898,50.262418],
  [57.86614511921017,50.262419],
  [57.707350261494305,50.262420],
  [57.796066,50.262421],
  [56.980047,50.262422],
  [57.003814,50.262423],
  [59.389318,50.262424],
  [59.951074,50.262425],
  [59.47436,50.262426],
  [59.204476,50.262427],
  [59.230106,50.262428],
  [59.230106,50.262429],
  [59.021019,50.262430],
  [59.131552,50.262431],
  [59.122612,50.262432],
  [59.122523746212806,50.262433],
  [59.157016,50.262434],
  [59.157375,50.262435],
  [59.477009,50.262436],
  [60.732071,50.262437],
  [60.418662,50.262438],
  [61.501468,50.262439],
  [59.833488,50.262440],
  [59.939099,50.262441],
  [59.838873,50.262442],
  [59.840157,50.262443],
  [59.811817,50.262444],
  [59.435109,50.262445],
  [59.435109,50.262446],
  [59.435109,50.262447],
  [66.084539,50.262448],
  ];
  
    
  var myGeoObjects = [];
  
  for (var i = 0; i<coords.length; i++) {
    myGeoObjects[i] = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: coords[i]
      },
      properties: {
        clusterCaption: 'Геообъект № '+(i+1),
        balloonContent: `
        <div class="balloon">
          <div class="balloon__address">${coords[i]}</div>
          <div class="balloon__contacts">
            <a href="tel:+7999999999">+7999999999</a>
          </div>
        </div>
      `
      }
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684809.png',
      iconImageSize: [40, 40],
      
    
    },
  );
  }
  
  var myClusterer = new ymaps.Clusterer();

  myClusterer.add(myGeoObjects);

  map.geoObjects.add(myClusterer);
  
  

}
ymaps.ready(init);
		
