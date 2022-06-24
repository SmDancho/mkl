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

let center = [59.021019,38.050309];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 5
	});

	let placemark1 = new ymaps.Placemark(center, {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon1.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon2.jpg" alt="angar">
				</div>

				<div class="balloon__address">"Краснодар"</div>
        <div class="balloon__descr">
        Ангар
            24х30х5
            Холодный
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  let placemark2 = new ymaps.Placemark([53.756344,40.154864], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
        <img class= "markimg"src="icons/mapicon3.jpg" alt="angar">
        <img class= "markimg"src="icons/mapicon4.jpg" alt="angar">
				</div>
        
				<div class="balloon__address">"село Петрово"</div>
        <div class="balloon__descr">
        Ферма (коровник)
        12х68х4,5
        Теплый
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  let placemark3 = new ymaps.Placemark([56.326797,44.006516], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon5.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon6.jpg" alt="angar">
				</div>

				<div class="balloon__address">"Нижний Новгород"</div>
        <div class="balloon__descr">
        Арочный ангар
        14х20х6
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  let placemark4 = new ymaps.Placemark([54.471738,36.063626], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon7.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon8.jpg" alt="angar">
				</div>

				<div class="balloon__address">"Калужская область"</div>
        <div class="balloon__descr">
        Склад авиатехники
        12х40х6
        Холодный
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  let placemark5 = new ymaps.Placemark([57.877898,39.481864], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon9.jpg" alt="angar">
				</div>

				<div class="balloon__address">"Артемьевское сельское поселение"</div>
        <div class="balloon__descr">
        Магазин
        21.3х19.4х4
        Теплый
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  let placemark6 = new ymaps.Placemark([59.021019,38.050309], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon10.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon11.jpg" alt="angar">
				</div>

				<div class="balloon__address">"деревня Починок"</div>
        <div class="balloon__descr">
        Производство
        10х15х5
        Холодный
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});
  let placemark7 = new ymaps.Placemark([60.732071,33.522171], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon12.jpg" alt="angar">
  
				</div>

				<div class="balloon__address">"Ленинградская область"</div>
        <div class="balloon__descr">
        Пилорама
        12х24х6,7
        Теплый
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});
  let placemark8 = new ymaps.Placemark([59.838873,30.444254], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon13.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon14.jpg" alt="angar">
  
				</div>

				<div class="balloon__address">"Санкт-Петербург"</div>
        <div class="balloon__descr">
        Мойка автоцистерн
        9х20х7
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  let placemark9 = new ymaps.Placemark([59.435109,29.691314], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon14.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon15.jpg" alt="angar">
  
				</div>

				<div class="balloon__address">"деревня Холоповицы"</div>
        <div class="balloon__descr">
        Цыплятник
        18х24х4.5
        Теплый
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});

  
  let placemark10 = new ymaps.Placemark([66.084539,76.680956], {
		balloonContent: `
			<div class="balloon">
      <div class="balloon__img">
      <img class= "markimg"src="icons/mapicon16.jpg" alt="angar">
      <img class= "markimg"src="icons/mapicon17.jpg" alt="angar">
  
				</div>

				<div class="balloon__address">"Новый Уренгой"</div>
        <div class="balloon__descr">
        Ангар под автобусы
        </div>
				
			</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/point.png',
		iconImageSize: [40, 40],
	});



	

  

  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
  map.geoObjects.add(placemark8);
  map.geoObjects.add(placemark9);
  map.geoObjects.add(placemark10);


}
ymaps.ready(init);
		
// headerFixed 

window.onscroll = function showHeader () {
    
  let header = document.querySelector('.header')

  if (window.pageYOffset > 100) {
    header.classList.add('header_fixed');
  }
  else if(window.pageYOffset < 100) {
    header.classList.remove('header_fixed');
  }

}