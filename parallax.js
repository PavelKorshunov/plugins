/*!
 * parallax.js v1.1 (https://github.com/PavelKorshunov)
 * @copyright 2017 Pavel Korshunov
 * use class="parallax" data-image-src="path/to/images.jpg"
 */

(function($) {

	$.fn.parallaxInit = function(option) {
		
		// setting for speed parallax

		var settings = $.extend({
			"speed" : "2"
		}, option);

		return this.each(function(){

			//style of parallax

			$(this).css({
				"height" : "100vh",
				"min-height" : "500px",
				"position" : "relative",
				"overflow" : "hidden"
			})
			.wrapInner("<div class='content-parallax'>")
			.prepend("<div class='image-parallax' style='background-image: url("+ $(this).data('image-src') +"); background-size:cover; background-position:top; position:absolute; top:0; width:100%;'>");
		
			// function for work of parallax

			function parallaxUse() {

				var globalHeight = $(window).height();

				var thisImgClass = $(".parallax").find(".image-parallax");
				thisImgClass.css({
					"height" : "100%",
					"min-height" : "500px",
				});

			var st = $(this).scrollTop();
			var oneHeight = globalHeight/100; // find 1%
			
				thisImgClass.css({
				"transform" : "translate3d(0px, " + st/oneHeight/settings.speed + "%, 0px)",
				"-webkit-transform" : "translate3d(0px, " + st/oneHeight/settings.speed + "%, 0px)"
				});

			};

			$(window).scroll(function() {
				parallaxUse();
			}).load(function() {
				parallaxUse();
			});
			$("*").resize(function(){
				parallaxUse();
			});

		});
	};

})(jQuery);