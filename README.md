# demoji.js
Remove emoji from input forms to prevent database problems.

## what does it do
This script will rewrite the input of all input[type=text] and textarea fields when a form is submitted.
If any emojis are found in the submitted value, this script will replace it for a shortcode.

## why is it needed
In some older version of [phpBB](http://www.phpbb.com/) adding Emoji from a mobile device will result in a database error.

## how to use
Copy the `jquery.demoji.js` to your website, add the following code to your HTML head and you're done.

```html
    <link rel="stylesheet" href="//cdn.jsdelivr.net/emojione/1.5.0/assets/css/emojione.min.css"/>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//cdn.jsdelivr.net/emojione/1.5.0/lib/js/emojione.min.js"></script>
    <script src="jquery.demoji.js"></script>
```

You might need to modify the path to `jquery.demoji.js` according to your own website structure.

## Demoji.js license

*  Applies to the Javascript, JSON, PHP, CSS, HTML files, and everything else in this repository.
*  License: MIT
*  Complete Legal Terms: http://opensource.org/licenses/MIT