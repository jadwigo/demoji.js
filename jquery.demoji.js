/* demoji.js | (c) 2015 | https://github.com/jadwigo/demoji.js */
/**
 * This script will rewrite the input of all input[type=text] and textarea fields when a form is submitted.
 * If any emojis are found in the submitted value, this script will replace it for a shortcode.
 * 
 * You need to add jQuery and the following codes to the head of your page too.
  <script src="//cdn.jsdelivr.net/emojione/1.5.0/lib/js/emojione.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/emojione/1.5.0/assets/css/emojione.min.css"/>
 *
 */
(function($) {
	$.fn.demoji = function() {
		return this.each(function() {
			$('input[type=text], textarea').each(function(){
				if ('undefined' != $(this).val() && $(this).val() != '') {
					$(this).val(emojione.toShort($(this).val()));
				}
			});
		});
	};
	$.fn.remoji = function() {
		return this.each(function() {
		     var input = $(this).html();
		     var output = emojione.toImage(input);
		     $(this).html(output);
		});
	};
}(jQuery));

jQuery(document).ready(function($) {
	// convert emoji to shortcodes
	$('form').submit (function(e) {
		$(this).demoji();
	});

	// and make images from the emoji shortcodes in your html
	// but only convert elements that have the class '.hasemoji'
	// you can also add other classes or selectors
	$('.hasemoji', 'body').each(function(e) {
		$(this).remoji();
	});
});
