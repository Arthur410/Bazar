function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');
	}
};


select();


$(document).ready(function () {
	$('.sliders').slick({
		dots: true,
		waitForAnimate: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	$('.sales__slider').slick();

	$('.beds').slick({
		dots: true,
	});

	$('.chairs').slick({
		dots: true,
	});

	$('.sofa').slick({
		dots: true,
	});
	$('.armchairs').slick({
		dots: true,
	});
	$('.table').slick({
		dots: true,
	});

	$('.new-items .preview__content').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.new-items .item__slider',
		focusOnSelect: true,
		waitForAnimate: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});

	$('.new-items .item__slider').slick({
		asNavFor: '.new-items .preview__content',
		waitForAnimate: false,
	});

	$('.top-sell .preview__content').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.top-sell .item__slider',
		focusOnSelect: true,
		waitForAnimate: false,
	});

	$('.top-sell .item__slider').slick({
		asNavFor: '.top-sell .preview__content',
		waitForAnimate: false,
	});

	$('.sales .preview__content').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.sales .item__slider',
		focusOnSelect: true,
		waitForAnimate: false,
	});

	$('.sales .item__slider').slick({
		asNavFor: '.sales .preview__content',
		waitForAnimate: false,
	});

	$('.top-rate .preview__content').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.top-rate .item__slider',
		focusOnSelect: true,
		waitForAnimate: false,
	});

	$('.top-rate .item__slider').slick({
		asNavFor: '.top-rate .preview__content',
		waitForAnimate: false,
	});

	$('.blog__slider').slick({
		dots: true,
	});

	$('.partners__slider').slick({
		waitForAnimate: false,
	});

	$('.feedback__slider').slick({
		dots: true,
	});

	$('.shop__title-nav ul li a').on('click', function (e) {
		event.preventDefault();
		let value = '.' + $(this).attr('id');
		$('.shop__slider').slideUp(0);
		$(value).slideDown(0);
		const items = document.querySelectorAll('.shop__title-nav ul li a');
		const target = e.target;
		Array.from(items).forEach(item => {
			item.classList.remove('active')
		})
		target.classList.add('active');
	});

	$('.gallery__content nav ul li a').on('click', function (e) {
		event.preventDefault();
		let galleryValue = '.' + $(this).attr('id');
		$('.gallery__content-item').slideUp(0);
		$(galleryValue).slideDown(0);
		const itemsG = document.querySelectorAll('.gallery__content nav ul li a');
		const targetG = e.target;
		Array.from(itemsG).forEach(itemG => {
			itemG.classList.remove('active')
		})
		targetG.classList.add('active');
	});

	let sort = function () {
		let selectHeader = document.querySelectorAll('.select__header');
		let selectItem = document.querySelectorAll('.select__item');

		selectHeader.forEach(item => {
			item.addEventListener('click', selectToggle)
		});

		selectItem.forEach(item => {
			item.addEventListener('click', selectChoose)
		});

		function selectToggle() {
			this.parentElement.classList.toggle('is-active');
		}

		function selectChoose() {
			let text = this.innerText,
				select = this.closest('.select'),
				currentText = select.querySelector('.select__current');
			currentText.innerText = text;
			select.classList.remove('is-active');
		}
	};


	sort();

	let show = function () {
		let selectHeader = document.querySelectorAll('.select__header');
		let selectItem = document.querySelectorAll('.select__item');

		selectHeader.forEach(item => {
			item.addEventListener('click', selectToggle)
		});

		selectItem.forEach(item => {
			item.addEventListener('click', selectChoose)
		});

		function selectToggle() {
			this.parentElement.classList.toggle('is-active');
		}

		function selectChoose() {
			let text = this.innerText,
				select = this.closest('.select'),
				currentText = select.querySelector('.select__current');
			currentText.innerText = text;
			select.classList.remove('is-active');
		}
	};


	show();

	var $navRange = $('.js-range');

	$navRange.each(function () {
		var min = parseInt($(this).data('minValue') || 0),
			max = parseInt($(this).data('maxValue') || 1000),
			currentMin = parseInt($(this).data('currentMinValue') || 0),
			currentMax = parseInt($(this).data('currentMaxValue') || 0),
			$inputMin = $(this).find('.range-widget-min'),
			$inputMax = $(this).find('.range-widget-max'),
			$slider = $(this).find('.range-widget__slider');


		if ($inputMin.length && $inputMax.length && $slider.length) {
			var inputs = [$inputMin[0], $inputMax[0]],
				keypressSlider = $slider[0];

			noUiSlider.create(keypressSlider, {
				start: [currentMin, currentMax],
				connect: true,
				direction: 'ltr',
				range: {
					'min': min,
					'max': max
				}
			});

			keypressSlider.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = parseInt(values[handle]);
			});
		}

	});

	$('.main__vidgets-categories ul li').click(function () {
		$('.main__vidgets-categories ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.main__vidgets-colors ul li').click(function () {
		$('.main__vidgets-colors ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.main__vidgets-size ul li').click(function () {
		$('.main__vidgets-size ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.main__vidgets-tags ul li').click(function () {
		$('.main__vidgets-tags ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.title__pos a').on('click', function (e) {
		e.preventDefault();
		let type = '.' + $(this).attr('id');
		$('.content, .content2').slideUp(0);
		$(type).slideDown(0);
	});

	$('#12').click(function () {
		$('.str3').slideDown(0);
		$('.str4').slideDown(0);
		$('.str2').slideDown(0);
		$('.str1').slideDown(0);
	})

	$('#9').click(function () {
		$('.str4').slideUp(0);
		$('.str3').slideUp(0);
		$('.str2').slideUp(0);
	})

	$('#6').click(function () {
		$('.str3').slideUp(0);
		$('.str4').slideUp(0);
		$('.str1').slideUp(0);
	})

	$('.newfurniture__slider').slick({
		dots: true,
	});
	$('.merchandise__description-slider').slick({
		asNavFor: '.merchandise__description-underslider',
	});

	$('.merchandise__description-underslider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.merchandise__description-slider',
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});

	$('.header-menu__navbar .burger').click(function () {
		$(this).toggleClass('active');
		$('html, body').toggleClass('lock');
		$('.header-menu__navbar nav').toggleClass('active');
	});

	$("#plus").click(function () {
		var $price = $(".content__quantity-current");
		$price.val(parseInt($price.val()) + 1);
		$price.change();
	});

	$("#minus").click(function () {
		var $price = $(".content__quantity-current");
		$price.val(parseInt($price.val()) - 1);
		$price.change();
	});
})