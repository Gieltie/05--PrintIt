let btnLeft = document.querySelector('.arrow_left');
let btnRight = document.querySelector('.arrow_right');
let banner = document.querySelector('.banner_img');
let tagLine = document.querySelector('.tagLine');
let dots = document.querySelectorAll('.dot');
let index = 0;

btnRight.addEventListener('click', function(){
	index++;
	if (index === slides.length) {
		index = 0;
	}
	banner.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	dots.forEach(function(dot) {
		dot.classList.remove('dot_selected');
	});
	dots[index].classList.add('dot_selected');
});

btnLeft.addEventListener('click', function(){
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	banner.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	dots.forEach(function(dot) {
		dot.classList.remove('dot_selected');
	});
	dots[index].classList.add('dot_selected');
});

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



