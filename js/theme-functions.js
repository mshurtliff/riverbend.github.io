var dhril = {};

String.prototype.matchAll = function(regexp) {
  var matches = [];
  this.replace(regexp, function() {
    var arr = ([]).slice.call(arguments, 0);
    var extras = arr.splice(-2);
    arr.index = extras[0];
    arr.input = extras[1];
    matches.push(arr);
  });
  return matches.length ? matches : null;
};


(function($) {
	"use strict";

	// window load
	$(window).on('load', function() {

		dhril.PageLoader();
		dhril.FlexSlider();
		$(window).resize();

	});

	// document ready
	$(document).ready(function() {

		dhril.ProgressBar();
		dhril.SiteMenu();
		dhril.PageUp();
		dhril.SmoothScroll();
		dhril.SiteSearch();
		dhril.CounterUp();
		dhril.iCheckForm();
		dhril.ParallaxBg();
		dhril.MatchHeight();
		dhril.WowAnimated();
		dhril.PageTooltip();
		dhril.StepButton();
		dhril.CountdownTimer();
		dhril.OwlSlider();
		dhril.PopupLightbox();
		dhril.MasonryGrid();
		dhril.IsotopeFilter();

		initSearchStockPlansForm();

	});

	// window resize
	$(window).resize(function() {

		dhril.FullHeight();

	});

	// window scroll
	$(window).scroll(function () {
		
		dhril.SiteHeader();
		dhril.AffixBs();

	});

	function initSearchStockPlansForm()
	{
		var condition = $('.searchStockPlansForm').size()
		    // && false
		;init(condition);

		function init(condition)
		{
		    if(condition)
		    {
				forceRemoveCookieIfRequired();
		        presetFormValues();
				setFormValuesSaveFunction();
		    }
		}

		function forceRemoveCookieIfRequired()
		{
			if(window['__globalsGetResetSearch'] == '1')
			{
				$.removeCookie('searchStockPlansForm', {path : "/"});
			}
		}

		function presetFormValues()
		{
			var formData =  $.cookie('searchStockPlansForm');
			if($.trim(formData) != '')
			{
				formData = JSON.parse(formData);
				for (var i = 0; i < formData.length; i++)
				{
					var fieldName = 'CAT_Custom' + decodeURIComponent(formData[i][2]);
					var fieldValue = decodeURIComponent(formData[i][3]);

					var field = $('.searchStockPlansForm [name="' + fieldName + '"]');
					if(field.size() > 1)
					{
						$('.searchStockPlansForm [name="' + fieldName + '"][value="' + fieldValue + '"]').prop('checked', true);
						$('.searchStockPlansForm [name="' + fieldName + '"][value="' + fieldValue + '"]').iCheck('update');
					}
					else
					{
						field.val(fieldValue);
					}
				}
				setSliderValues();
			}
		}

		function setFormValuesSaveFunction()
		{
			window.setSearchStockPlansFormValues = function(form)
			{
				var formData = form.serialize().replace(/\+/g, '%20').matchAll(/(^|&)(.*?)=([^&]*)/g);
				formData = JSON.stringify(formData);
				formData = formData.replace(/CAT_Custom/g, '');
				$.removeCookie('searchStockPlansForm', {path : "/"});
				$.cookie('searchStockPlansForm', formData, {path : "/"});
			};
		}
	}

	/* -------------------------
	Page Loader
	------------------------- */
	dhril.PageLoader = function () {

		$('.loader').fadeOut();
		$('.page-loader').delay(300).fadeOut('slow');

	};

	/* -------------------------
	Menu
	------------------------- */
	dhril.SiteMenu = function () {

		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});

	};

	/* -------------------------
	Header
	------------------------- */
	dhril.SiteHeader = function () {

		var scroll = $(window).scrollTop();

		if (scroll > 0) {
			$('.sticky-nav').addClass('sticky-menu');
		} else {
			$('.main-header').removeClass('sticky-menu');
		}

	};

	/* -------------------------
	Search
	------------------------- */
	dhril.SiteSearch = function () {

		$(".search-icon").on('click', function(e) {

			var search = $(this),
			input = search.parent().find("#search"),
			submit = search.parent().find(".submit"),
			is_submit_clicked = false;

			input.animate({
				"width": "220px",
				"padding": "0",
				"opacity": 1
			}, 200, function() {
				input.focus();
			});

			submit.mousedown(function() {
				is_submit_clicked = true;
			});

			input.focusout(function() {
				if(!input.val() && !is_submit_clicked) {
					input.animate({
						"width": "0",
						"padding": "0",
						"opacity": 0
					}, 200);
						search.fadeIn(200);
				};
			});

		});

	};

	/* -------------------------
	Full Height
	------------------------- */
	dhril.FullHeight = function () {

		$('.fullheight-js').height($(window).height());

	};

	/* -------------------------
	Match Height
	------------------------- */
	dhril.MatchHeight = function () {

		$('.multi-column .post-media').matchHeight({property: 'height'});

	};

	/* -------------------------
	Mobile Detect
	------------------------- */
	var onMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		all: function() {
			return (onMobile.Android() || onMobile.BlackBerry() || onMobile.iOS() || onMobile.Opera() || onMobile.Windows());
		}
	};

	if (onMobile.all()) {
		$('body').addClass('on-mobile');
	}

	/* -------------------------
	Affix
	------------------------- */
	dhril.AffixBs = function () {

		$('#screen-bottom').affix({
			offset: {
				top: $('header').height()
			}
		});	

	};

	/* -------------------------
	Page Up
	------------------------- */
	dhril.PageUp = function () {

		var offset = 600;
		var duration = 800;

		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.page-up').fadeIn(duration);
			} else {
				jQuery('.page-up').fadeOut(duration);
			}
		});

		jQuery('.page-up').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});

	};
	
	/* -------------------------
	Progress bar
	------------------------- */
	dhril.ProgressBar = function () {

		$('.progress-line').appear(function() {
			jQuery(this).find('.percentage-line').animate({
				width:jQuery(this).attr('data-progress-percent')
			}, 2500);
		});

	};

	/* -------------------------
	Smooth Scroll
	------------------------- */
	dhril.SmoothScroll = function () {

		$('.page-banner a').smoothScroll({
			offset: 0,
			speed: 1000
		});

	};

	/* -------------------------
	Counter
	------------------------- */
	dhril.CounterUp = function () {

		$(".counter-box span").appear(function(){
			var counter = $(this);
			
			counter.countTo({
				from: 0,
				speed: 3500,
				refreshInterval: 50,
			});

		});

	};

	/* -------------------------
	iCheck
	------------------------- */
	dhril.iCheckForm = function () {

		$('input').iCheck({
			checkboxClass: 'icheckbox_square mr8',
			radioClass: 'iradio_square mr8'
		});

	};

	/* -------------------------
	Parallax
	------------------------- */
	dhril.ParallaxBg = function () {

		if (!onMobile.all()) {
			$.stellar({
				responsive: true,
				horizontalScrolling: false
			});
		}

	};

	/* -------------------------
	Wow Animated
	------------------------- */
	dhril.WowAnimated = function () {

		var wow = new WOW({
			mobile: false 
		});
		wow.init();

	};

	/* -------------------------
	Tooltip
	------------------------- */
	dhril.PageTooltip = function () {

		$('[data-toggle="tooltip"]').tooltip();

	};

	/* -------------------------
	Step Button (Tabs)
	------------------------- */
	dhril.StepButton = function () {

		$('.stepbtn-next').on('click', function() {
			$('.nav-tabs > .active').next('li').find('a').trigger('click');
		});

		$('.stepbtn-prev').on('click', function() {
			$('.nav-tabs > .active').prev('li').find('a').trigger('click');
		});

	};

	/* -------------------------
	Countdown Timer
	------------------------- */
	dhril.CountdownTimer = function () {

		$('[data-countdown]').each(function() {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
				$this.html(event.strftime('<span>%D <small>days</small></span><span>%H <small>hours</small></span><span>%M <small>min</small></span><span>%S <small>sec</small></span>'));
			});
		});

	};

	/* -------------------------
	Owl Slider
	------------------------- */
	dhril.OwlSlider = function () {

		$("#content-slider").owlCarousel({
			navigation : true,
			pagination: false,
			autoPlay: 5000,
			responsive: true,
			singleItem: true,
			stopOnHover: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});

		$("#grid-slider").owlCarousel({
			navigation : false,
			pagination: false,
			autoPlay: 5000,
			items : 3,
			responsive: true,
			stopOnHover: true,
		});

		$("#logo-slider").owlCarousel({
			autoPlay: 5000,
			stopOnHover: true,
			items : 5,
			responsive: true,
			navigation : false,
			pagination: false
		});

	};

	/* -------------------------
	Flex Slider
	------------------------- */
	dhril.FlexSlider = function () {

		$('.shop-single-gallery').flexslider({
			animation: "slide",
			controlNav: "thumbnails",
			touch: "true",
			directionNav: false
		});

	};

	/* -------------------------
	Popup Lightbox
	------------------------- */
	dhril.PopupLightbox = function () {

		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			}
		});

		$('.popup-portfolio').magnificPopup({
			type:'image',
				gallery: {
				enabled: true
			}
		});

		$('.popup-zoom').magnificPopup({
			delegate: 'a',
			type: 'image',
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			zoom: {
				enabled: true,
				easing: 'ease-in-out',
					opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	};

	/* -------------------------
	Masonry
	------------------------- */
	dhril.MasonryGrid = function () {

		$(".masonry").imagesLoaded(function(){
			$(".masonry").masonry({
				percentPosition: true
			});
		});
		
	};

	/* -------------------------
	Isotope
	------------------------- */
	dhril.IsotopeFilter = function () {

		var portfolio_grid = $('.portfolio-grid');
		var layout_mode;

		if (portfolio_grid.hasClass("masonry")) {
			layout_mode = "masonry";
		} else {
			layout_mode = "fitRows"
		}

		portfolio_grid.isotope({
			itemSelector: '.portfolio-item'
		});

		$('.portfolio-filter').on( 'click', 'a', function(e) {
			$('.portfolio-filter a').removeClass("current");
			$(this).addClass("current");
			var filterValue = $(this).attr('data-filter');
			portfolio_grid.isotope({ filter: filterValue });
			e.preventDefault();
		});
		
		portfolio_grid.imagesLoaded(function(){
			portfolio_grid.isotope({
				itemSelector : '.portfolio-item',
				layoutMode: layout_mode
			});
		});

	};

})(jQuery);

/*=========================================== REGION: PLUGINS DECLARATION ======================================================*/
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
/*=========================================== ENDREGION: PLUGINS DECLARATION ====================================================*/
