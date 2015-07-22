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
}(jQuery));

jQuery(document).ready(function($) {
	$('form').submit (function(e) {
		$(this).demoji();
	});
});
