"use strict"

document.addEventListener('click', documentClick);
const burgerOpen = document.querySelector('body');
function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		burgerOpen.classList.toggle('menu-open');
	}
	if (targetItem.closest('.menu__list')) {
		burgerOpen.classList.toggle('menu-open');
	}
	if (targetItem.closest('.theme__button')) {
		const burgerOpen = document.querySelector('body');
		burgerOpen.classList.toggle('ligth-theme');
	}
}


const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}

//=========================== E-mail checker==========================//

function validation() {
	let subform = document.getElementById("subscribe_form");
	let subemail = document.getElementById("subscribe_email").value;
	let subtext = document.getElementById("subscribe_text");
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

	if (subemail.match(pattern)) {
		subform.classList.add("valid");
		subform.classList.remove("invalid");
		subtext.innerHTML = "Your Email Address in Valid.";
		subtext.style.color = "#00ff00";
	} else {
		subform.classList.remove("valid");
		subform.classList.add("invalid");
		subtext.innerHTML = "Please Enter Valid Email Address";
		subtext.style.color = "#ff0000";
	}
	if (subemail == "") {
		subform.classList.remove("valid");
		subform.classList.remove("invalid");
		subtext.innerHTML = "";
		subtext.style.color = "#00ff00";
	}
}