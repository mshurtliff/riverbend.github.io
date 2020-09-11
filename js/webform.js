// Us
$(document).ready(function() {
	
	/* select box on change  change the form action */
	$('.search_block select').change(function(e) {
        change_form_action();
    });
	
	
var wd = $(window).width();
	if(wd > 767)
	{
		var main_height = $(".two-column-area .left_area_panel").height();	
$(".two-column-area .side_panel").css('min-height',main_height);
	}

$(".search_properti").click(function(e) {
    $(".searchbox_content input[type='submit']").trigger("click");
});
	
  //$("html").niceScroll({styler:"fb",cursorcolor:"#000"});
   
	  // $(".parallax").simpleParallax();
 // Feature Page 
    $(".feature-menu ul li").each(function(){
			$(this).find("a").click(function(){
			var hrf = $(this).attr("href");
				$('html, body').animate({
					scrollTop: $(hrf).offset().top
				}, 3000);
			});	
			});
			


	//=======Faq============//
	
	 $(".faq-question a").click(function(e) {
              $(this).toggleClass("active");
        });
	

   $(".grid-list ul li a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("selected");
        $(this).parent().siblings().removeClass("selected");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

// Price Range
$(".search_block").each(function(index, element) {
    $(this).find("select").change(function(e) {
        var selct = $(this).val();
		$(".results-var").html(selct);
    });
	
// Select Range	
	$('.search-custom select option').each(function() {
  $(this).prevAll('option[value="' + this.value + '"]').remove();
});
});

var act = $(".search-custom form").attr("action")
var slval = $(".results-var").text();

var priceMin = $("#priceRange").data("min");
var priceMax = $("#priceRange").data("max");

var $range = $(".range"),
$result = $(".result1");  
		var track = function () {
			var $this = $(this),
				value = $this.prop("value").split(";");
				//$result.html("<p class='p1'>"+value[0]+"</p><p class='p2'>"+value[1]+"</p>");
				
				/*var p1 = value[0];
				var p2 = value[1];
				var a1= $('.box2 .irs-from').text();
				var a2 = $('.box2 .irs-to').text();
				var action = "#"+p1+"/"+p2+"/"+a1+"/"+a2;
				$(".search-custom form").attr("action", "/Default.aspx?CCID=25982&FID=187568&ExcludeBoolFalse=True&PageID=16333988"+action);*/
				change_form_action();
		};

        $range.ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: priceMin,
            max: priceMax,
            from: 0,
            to: priceMax,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });
    	
		
		 $range.on("change", track);
		 
// Sq Ft range	
    
var sqftMin = $("#sqftRange").data("min");
var sqftMax = $("#sqftRange").data("max"); 
var sqftFrom = $("#sqftRange").data("from");
var sqftTo = $("#sqftRange").data("to");
    
if (sqftFrom == null || sqftFrom.length == 0)
{
    sqftFrom = sqftMin;
}
    
if (sqftTo == null || sqftTo.length == 0)
{
    sqftTo = sqftMax;
}
    
var $sqft = $(".sqft"),
$results = $(".result2");  
		var tracking = function () {
			var $this = $(this),
				value = $this.prop("value").split(";");
				/*var a1 = value[0];
				var a2 = value[1];
				var p1 = $('.box1 .irs-from').text();
				var p2 = $('.box1 .irs-to').text();
				var action = "#"+p1+"/"+p2+"/"+a1+"/"+a2;
				$(".search-custom form").attr("action", "/Default.aspx?CCID=25982&FID=187568&ExcludeBoolFalse=True&PageID=16333988"+action);*/
				change_form_action();

		};

		$sqft.ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: sqftMin,
            max:sqftMax,
            from: sqftFrom,
            to: sqftTo,
            type: 'double',
            step: 1,
            prefix: "",
            grid: true
        });

$sqft.on("change", tracking);
    

    
    
// Width range	
    
var widthMin = $("#widthRange").data("min");
var widthMax = $("#widthRange").data("max"); 
var widthFrom = $("#widthRange").data("from");
var widthTo = $("#widthRange").data("to");
    
if (widthFrom == null || widthFrom.length == 0)
{
    widthFrom = widthMin;
}
    
if (widthTo == null || widthTo.length == 0)
{
    widthTo = widthMax;
}
    
var $width = $(".width"),
$results = $(".result3");  
		var tracking = function () {
			var $this = $(this),
				value = $this.prop("value").split(";");
				/*var a1 = value[0];
				var a2 = value[1];
				var p1 = $('.box1 .irs-from').text();
				var p2 = $('.box1 .irs-to').text();
				var action = "#"+p1+"/"+p2+"/"+a1+"/"+a2;
				$(".search-custom form").attr("action", "/Default.aspx?CCID=25982&FID=187568&ExcludeBoolFalse=True&PageID=16333988"+action);*/
				change_form_action();

		};

		$width.ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: widthMin,
            max: widthMax,
            from: widthFrom,
            to: widthTo,
            type: 'double',
            step: 1,
            prefix: "",
            grid: true
        });

$width.on("change", tracking);
    
    
    
    
// Depth range	
    
var depthMin = $("#depthRange").data("min");
var depthMax = $("#depthRange").data("max"); 
var depthFrom = $("#depthRange").data("from");
var depthTo = $("#depthRange").data("to");
    
if (depthFrom == null || depthFrom.length == 0)
{
    depthFrom = depthMin;
}
    
if (depthTo == null || depthTo.length == 0)
{
    depthTo = depthMax;
}
    
var $depth = $(".depth"),
$results = $(".result4");  
		var tracking = function () {
			var $this = $(this),
				value = $this.prop("value").split(";");
				/*var a1 = value[0];
				var a2 = value[1];
				var p1 = $('.box1 .irs-from').text();
				var p2 = $('.box1 .irs-to').text();
				var action = "#"+p1+"/"+p2+"/"+a1+"/"+a2;
				$(".search-custom form").attr("action", "/Default.aspx?CCID=25982&FID=187568&ExcludeBoolFalse=True&PageID=16333988"+action);*/
				change_form_action();

		};

		$depth.ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: depthMin,
            max: depthMax,
            from: depthFrom,
            to: depthTo,
            type: 'double',
            step: 1,
            prefix: "",
            grid: true
        });

$depth.on("change", tracking);
		
});

function change_form_action(){
	
	var sq1 = $('.box1 .irs-from').text();
	var sq2 = $('.box1 .irs-to').text();
	var w1 = $('.box2 .irs-from').text();
	var w2 = $('.box2 .irs-to').text();
    var d1 = $('.box3 .iris-from').text();
    var d2 = $('.box3 .iris-to').text();
	
	var s1 = $('.search_block .medium-4:first-child option:selected,.search-custom .small-12:first-child option:selected').val();
	var s2 = $('.search_block .medium-4:nth-child(2) option:selected,.search-custom .small-12:nth-child(2) option:selected').val();
	var s3 = $('.search_block .medium-4:nth-child(3) option:selected,.search-custom .small-12:nth-child(3) option:selected').val();
	var s4 = $('.search_block .medium-4:nth-child(4) option:selected,.search-custom .small-12:nth-child(4) option:selected').val();
	var s5 = $('.search_block .medium-4:nth-child(5) option:selected,.search-custom .small-12:nth-child(5) option:selected').val();
	var s6 = $('.search_block .medium-4:nth-child(6) option:selected,.search-custom .small-12:nth-child(6) option:selected').val();
	
	var action = "#"+w1+"/"+w2+"/"+sq1+"/"+sq2+"/"+d1+"/"+d2+"/"+s1+"/"+s2+"/"+s3+"/"+s4+"/"+s5+"/"+s6;

	$(".search-custom form").attr("action", "/Default.aspx?CCID=25982&FID=187568&ExcludeBoolFalse=True&PageID=16333988"+action);
	
}
$(window).load(function(e) {
	change_form_action();    
});


// Slider

$('.hero-slider, .recent-slider').slick({
    dots: false,
    speed: 2000,
    arrows: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    touchMove: true,
    slide: 'li',
});

$('.two-col-slider').slick({
  arrows: true,
  speed: 1200,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  touchMove: true,		
  slide: 'li',
  responsive: [
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }

    }
  ]
});	



$('.three-col-slider').slick({
  arrows: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  touchMove: true,		
  slide: 'li',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]
});	
$('.four-col-slider').slick({
  arrows: true,
  speed: 1200,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  touchMove: true,		
  slide: 'li',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]
});	

$('.logo-slider').slick({
  arrows: false,
  speed: 1200,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  touchMove: true,		
  slide: 'li',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 642,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]
});	


 

$('.testimonial-slider').slick({
	dots: true,
	speed: 2500,
	slidesToShow: 1,
	touchMove: false,
	slide: 'li',
	autoplay: true,
	autoplaySpeed: 5000
	});	



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: false,
  focusOnSelect: true
});

