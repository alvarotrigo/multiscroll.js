# multiScroll.js

![preview](https://raw.github.com/alvarotrigo/multiScroll.js/master/examples/imgs/multiscroll.png)
![compatibility](http://alvarotrigo.com/multiScroll/imgs/compatible.gif)

---
![multiScroll.js version](http://img.shields.io/badge/multiscroll.js-v0.2.2-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *3.7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Live demo](http://alvarotrigo.com/multiScroll/)
- [Wordpress theme](https://goo.gl/Xuix30)
- [multiScroll.js Extensions](http://alvarotrigo.com/multiScroll/extensions/)
- [Website post](http://alvarotrigo.com/blog/multiscroll-js-jquery-plugin-to-create-multi-scrolling-sites-with-two-vertical-layouts/)
---

A simple plugin to create multi scrolling websites with two vertical scrolling panels.


Invite me to a coffee
[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/es/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=multiScroll%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Customizations of the plugin available upon request for some reasonable price. <a href="http://alvarotrigo.com/#contact-page">Contact me</a>.

- [Introduction](https://github.com/alvarotrigo/multiscroll.js#introduction)
- [Compatibility](https://github.com/alvarotrigo/multiscroll.js#compatibility)
- [Usage](https://github.com/alvarotrigo/multiscroll.js#usage)
  - [Creating links to sections](https://github.com/alvarotrigo/multiscroll.js#creating-links-to-sections)
  - [State classes added by multiscroll.js](https://github.com/alvarotrigo/multiscroll.js#state-classes-added-by-multiscrolljs)
  - [Use extensions](https://github.com/alvarotrigo/multiscroll.js#use-extensions)
- [Options](https://github.com/alvarotrigo/multiscroll.js#options)
- [Methods](https://github.com/alvarotrigo/multiscroll.js#methods)
- [Callbacks](https://github.com/alvarotrigo/multiscroll.js#callbacks)
- [Reporting issues](https://github.com/alvarotrigo/multiscroll.js#reporting-issues)
- [Changelog](https://github.com/alvarotrigo/multiscroll.js#changelog)
- [Build tasks](https://github.com/alvarotrigo/multiscroll.js#build-tasks)
- [Resources](https://github.com/alvarotrigo/multiscroll.js#resources)
- [Who is using multiscroll.js](https://github.com/alvarotrigo/multiscroll.js#who-is-using-multiscrolljs)
- [Donations](https://github.com/alvarotrigo/multiscroll.js#donations)
- [License](https://github.com/alvarotrigo/multiscroll.js#license)

## Introduction
This plugin its in Beta version. Suggestion are more than welcome, not only for feature requests but also for coding style improvements.

## Compatibility
multiScroll.js is fully functional on all modern browsers, as well as some old ones such as Internet Explorer 8, 9, Opera 12...
It works with browsers with CSS3 support and with the ones who don't have it, making it ideal for old browsers compatibility.
It is designed to work as well on touch devices such as mobile phones or tablets.

## Usage
As you can see in the example files, you will need to include the JavaScript file `jquery.multiscroll.js` (or the minified version `jquery.multiscroll.min.js`) and the css file `jquery.multiscroll.css` of the plugin, as well as [jQuery](http://jquery.com/). Optionally, you can add the [jQuery UI library](http://jqueryui.com/) in case you want to use other easing effects apart from the ones included in the jQuery library which are the `linear` or `swing` effects. (`easeInQuart` is active by default, so you would need [jQuery UI library](http://jqueryui.com/) or the customized version  which is included in the vendors folder under the name `jquery.easings.min.js`.)

### Install using bower or npm
**Optionally**, you can install multiscroll.js with bower or npm if you prefer:
Terminal:
```shell
// With bower
bower install multiscroll.js

// With npm
npm install multiscroll.js
```

### Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.multiscroll.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<!-- This following line is needed in case of using the default easing option or when using another
 one rather than "linear" or "swing". You can also add the full jQuery UI instead of this file if you prefer -->
<script src="vendors/jquery.easings.min.js"></script>

<script type="text/javascript" src="jquery.multiscroll.js"></script>
```

### Optional use of CDN
If you prefer to use a CDN to load the needed files, multiscroll.js is in CDNJS:
https://cdnjs.com/libraries/multiscroll.js

### Required HTML structure
Each section will be defined with a `div` containing the `section` class.
The active section by default will be the first section, which is taken as the home page.
```html
<div id="multiscroll">
	<div class="ms-left">
		<div class="ms-section">Some section</div>
		<div class="ms-section">Some section</div>
		<div class="ms-section">Some section</div>
	</div>
	<div class="ms-right">
		<div class="ms-section">Some section</div>
		<div class="ms-section">Some section</div>
		<div class="ms-section">Some section</div>
	</div>
</div>
```

If you want to define a different starting point rather than the first section, just add the class active to the section you want to show on load.
This should be done for the `ms-right` and `ms-left` elements.

```javascript
<div class="ms-section active">Some section</div>
```

### Initialization
All you need to do is call the plugin inside a `$(document).ready` function:

```javascript
$(document).ready(function() {
	$('#multiscroll').multiscroll();
});
```

A more complex initialization with all options set could look like this:
```javascript
$(document).ready(function() {
	$('#multiscroll').multiscroll({
		verticalCentered : true,
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: false,
		sectionsColor: [],
		navigation: false,
		navigationPosition: 'right',
		navigationColor: '#000',
		navigationTooltips: [],
		loopBottom: false,
		loopTop: false,
		css3: false,
		paddingTop: 0,
		paddingBottom: 0,
		normalScrollElements: null,
		scrollOverflow: false,
		scrollOverflowOptions: null,
		keyboardScrolling: true,
		touchSensitivity: 5,

		//responsive
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveExpand: false,

		// Custom selectors
		sectionSelector: '.ms-section',
		leftSelector: '.ms-left',
		rightSelector: '.ms-right',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
	});
});
```

### Creating links to sections
If you are using multiscroll.js with anchor links for the sections (using the `anchors` option), then you will be able to use anchor links also to navigate directly to a certain section by using the URL.

You can do it by creating accessing to the URL by adding the anchor. For example: `http://youriste.com/#secondSection`.

**Be careful!** `data-anchor` tags can not have the same value as any ID element on the site (or NAME element for IE).

You can also use the `menu` option and make use of anchor links (#) as explained below in the options section.


### State classes added by multiScroll.js
multiScroll.js adds multiple classes in different elements to keep a record of the status of the site:

- `active` is added the current visible section.
- `active` is added to the current menu element (if using the `menu` option).
- A class of the form `ms-viewing-SECTION` is added to the `body` element of the site. (eg: [`ms-viewing-second`](http://alvarotrigo.com/multiScroll/#second) The `SECTION` part will be the anchors (or index if no anchor is provided) of the current section.
- `ms-responsive` is added to the `body` element when the entering in the responsive mode

### Use extensions
multiscroll.js [provides a set of extensions](http://alvarotrigo.com/multiScroll/extensions/) you can use to enhance its default features. All of them are listed as [multiscroll.js options](https://github.com/alvarotrigo/multiscroll.js#options).

Extensions requires you to use the minified file [`jquery.multiscroll.extensions.min.js`](https://github.com/alvarotrigo/multiscroll.js/blob/master/dist/jquery.multiscroll.extensions.min.js) that is inside the [`dist` folder](https://github.com/alvarotrigo/multiscroll.js/tree/master/dist) instead of the usual multiscroll.js file (`jquery.multiscroll.js` or `jquery.multiscroll.min.js`).

Once you adquire the extension file, you will need to add it before multiscroll. For example, if I want to use the Continuos Horizontal extension, I would have include the extension file and then the extensions version of the multiscroll file.

```html
<script type="text/javascript" src="multiscroll.responsiveExpand.min.js"></script>
<script type="text/javascript" src="jquery.multiscroll.extensions.min.js"></script>
```

An activation key and a license key will be required for each extension. [See more details about it here](https://github.com/alvarotrigo/multiscroll.js/wiki/How-to-activate-a-multiscroll.js-extension).

Then you will be able to use and configure them as explained in [options](https://github.com/alvarotrigo/multiscroll.js#options).

## Options

- `verticalCentered`: (default `true`) Vertically centering of the content within sections.

- `scrollingSpeed`: (default `700`) Speed in milliseconds for the scrolling transitions.

- `sectionsColor`:(default `none`) Define the CSS `background-color` property for each section:
Example:
```javascript
$('#multiscroll').multiscroll({
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (default `[]`) Defines the anchor links (#example) to be shown on the URL for each section. Using anchors forward and backward navigation will also be possible through the browser. This option also allows users to bookmark a specific section. **Be careful!** if you use anchors, they can not have the same value as any ID element on the site (or NAME element for IE).

- `easing`: (default `easeInQuart`) Defines the transition effect to use for the vertical and horizontal scrolling.
It requires the file `vendors/jquery.easings.min.js` or [jQuery UI](http://jqueryui.com/) for using some of its transitions. Other libraries could be used instead.

- `loopTop`: (default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

- `loopBottom`: (default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

- `css3`: (default `false`). Defines wheter to use JavaScript or CSS3 transforms to scroll within sections. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS3. If this option is set to `true` and the browser doesn't support CSS3, a jQuery fallback will be used instead.

- `paddingTop`: (default `0`) Defines the top padding for each section with a numerical value and its measure (paddingTop: '10px', paddingTop: '10em'...) Useful in case of using a fixed header.

- `paddingBottom`: (default `0`) Defines the bottom padding for each section with a numerical value and its measure (paddingBottom: '10px', paddingBottom: '10em'...). Useful in case of using a fixed footer.

- `normalScrollElements`: (default `null`) If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for maps, scrolling divs etc.) It requires a string with the jQuery selectors for those elements. (For example: `normalScrollElements: '#element1, .element2'`)

- `scrollOverflow`: (default `false`) [Demo](https://alvarotrigo.com/multiScroll/extensions/scrollOverflow.html) | [Extension of multiScroll.js](http://alvarotrigo.com/multiScroll/extensions/). (not compatible with IE 8) defines whether or not to create a scroll bar for the section/slide in case its content is bigger than the viewport's height. When set to `true`, your content will be wrapped by multiScroll.js. Consider using delegation or load your other scripts in the `afterRender` callback.

- `scrollOverflowOptions`: (default `null`) when using `scrollOverflow:true` multiScroll.js will make use of a forked and modified version of [iScroll.js library](https://github.com/cubiq/iscroll/). You can customize the scrolling behaviour by providing multiScroll.js with the iScroll.js options you want to use. Check its [documentation](http://iscrolljs.com/) for more info.

- `keyboardScrolling`: (default `true`) Defines if the content can be navigated using the keyboard

- `touchSensitivity`: (default 5) Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section.

- `menu`: (default `false`) A selector can be used to specify the menu to link with the sections. This way the scrolling of the sections will activate the corresponding element in the menu using the class `active`.
This won't generate a menu but will just add the `active` class to the element in the given menu with the corresponding anchor links.
In order to link the elements of the menu with the sections, an HTML 5 data-tag (`data-menuanchor`) will be needed to use with the same anchor links as used within the sections. Example:
```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
	<li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
</ul>
```
```javascript
$('#multiscroll').multiscroll({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

- `navigation`: (default `false`) If set to `true`, it will show a navigation bar made up of small circles.

- `navigationPosition`: (default `none`) It can be set to `left` or `right` and defines which position the navigation bar will be shown (if using one).

- `navigationTooltips`: (default []) Defines the tooltips to show for the navigation circles in case they are being used. Example: `navigationTooltips: ['firstSection', 'secondSection']`.

- `sectionSelector`: (default `.ms-section`) You can use own class name for section.

- `leftSelector`: (default `.ms-left`) You can use own class name for left block.

- `rightSelector`: (default `.ms-right`) You can use own class name for right block.

- `responsiveWidth`: (default `0`) Only useful when using the option `responsiveExpand`. Normal scroll will be used under the defined width in pixels. A class `ms-responsive` is added to the body tag in case the user wants to use it for his own responsive CSS. For example, if set to 900, whenever the browser's width is less than 900 the plugin will scroll like a normal site.

- `responsiveHeight`: (default `0`) Only useful when using the option `responsiveExpand`. Normal scroll will be used under the defined height in pixels. A class `ms-responsive` is added to the body tag in case the user wants to use it for his own responsive CSS. For example, if set to 900, whenever the browser's height is less than 900 the plugin will scroll like a normal site.

- `responsiveExpand`: (default `false`) [Demo](https://alvarotrigo.com/multiScroll/extensions/responsive-expand.html) | [Extension of multiScroll.js](http://alvarotrigo.com/multiScroll/extensions/). When responsive mode is fired (by using the `responsiveWidth` or `responsiveHeight` options detailed above) it turns auto scrolling off and expands each left and right side into a full-width section placing one after another. Then the page can be scrolled normally. [Read more about how to use the Responsive Expand option.](https://github.com/alvarotrigo/multiscroll.js/wiki/Responsive-Expand-Extension)

## Methods

### moveSectionUp()
Scrolls one section up:
```javascript
$.fn.multiscroll.moveSectionUp();
```

### moveSectionDown()
Scrolls one section down:
```javascript
$.fn.multiscroll.moveSectionDown();
```

### moveTo(section)
Scrolls the page to the given section. The first section parameter can be the index of the section or its anchor link.
```javascript
/*Scrolling to the section with the anchor link `firstSection` */
$.fn.multiscroll.moveTo('firstSection');

```

```javascript
//Scrolling to the 3rd section in the site
$.fn.multiscroll.moveTo(3);
```

### setKeyboardScrolling
Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys (which is active by default).

```javascript
$.fn.multiscroll.setKeyboardScrolling(false);
```


### setScrollingSpeed
Defines the scrolling speed in milliseconds.

```javascript
$.fn.multiscroll.setScrollingSpeed(700);
```

### destroy
Destroy plugin's events.

```javascript
$.fn.multiscroll.destroy();
```

### build
Build plugin's events after destroy.

```javascript
$.fn.multiscroll.build();
```


## Callbacks
### afterLoad (`anchorLink`, `index`)
Callback fired once the sections have been loaded, after the scrolling has ended.
Parameters:

- `anchorLink`: anchorLink corresponding to the section.
- `index`: index of the section. Starting from 1.

In case of not having anchorLinks defined in the plugin the `index` parameter would be the only one to use.

Example:

```javascript
	$('#multiscroll').multiscroll({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterLoad: function(anchorLink, index){
			//using index
			if(index == '3'){
				alert("Section 3 ended loading");
			}

			//using anchorLink
			if(anchorLink == 'secondSection'){
				alert("Section 2 ended loading");
			}
		}
	});
```

### onLeave (`index`, `nextIndex`, `direction`)
This callback is fired once the user leaves a section, in the transition to the new section.

Parameters:

- `index`: index of the leaving section. Starting from 1.
- `nextIndex`: index of the destination section. Starting from 1.
- `direction`: it will take the values `up` or `down` depending on the scrolling direction.

Example:

```javascript
	$('#multiscroll').multiscroll({
		onLeave: function(index, direction){
			//after leaving section 2
			if(index == '2' && direction =='down'){
				alert("Going to section 3!");
			}

			else if(index == '2' && direction == 'up'){
				alert("Going to section 1!");
			}
		}
	});
```


### afterRender()
This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure).

Example:

```javascript
	$('#multiscroll').multiscroll({
		afterRender: function(){
			alert("The resulting DOM structure is ready");
		}
	});
```

### afterResize()
This callback is fired after resizing the browser's window. Just after the sections are resized.

Example:

```javascript
	$('#multiscroll').multiscroll({
		afterResize: function(){
			alert("The sections have finished resizing");
		}
	});
```

## Reporting issues
1. Please, look for your issue before asking using the github issues search.
2. Make sure you use the latest multiscroll.js version. No support is provided for older versions.
3. Use the [the Github Issues forum](https://github.com/alvarotrigo/multiscroll.js/issues) to create issues.
4. **An isolated reproduction of the issue will be required.** Make use of jsfiddle or codepen for it if possible.

## Changelog
To see the list of recent changes, see [Releases section](https://github.com/alvarotrigo/multiscroll.js/releases).

## Build tasks
Want to build multiscroll.js distribution files? Please see [Build Tasks](https://github.com/alvarotrigo/multiscroll.js/wiki/Build-tasks)

## Resources
- [Wordpress theme](https://goo.gl/kaTYZb)

## Who is using multiscroll.js
If you want your page to be listed here. Please <a href="mailto:alvaro@alvarotrigo.com">contact me</a> with the URL.

- [Themify](https://goo.gl/kaTYZb)
- http://designova.net/reflex/index07.html
- https://www.genscher.com
- http://betterhr.de
- https://www.kurasino.co.jp
- http://www.lhaulhaumaria.com
- https://thewastedhour.com
- http://restaurant-eveil.com
- https://www.tischlerei-clemens.de/tischlerei.html
- http://www.ateliers-romeo.com
- https://buerobinder.de
- https://www.blancacre.com
- http://caporasosrls.com
- https://www.epic.ch/de/home
- https://www.paulsbuero.com
- http://ruiferraodev.net
- http://lucasfleischer.com
- https://quintushortus.com/pages/le-concept


## Donations
Donations would be more than welcome :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/es/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=multiScroll%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## License

(The MIT License)

Copyright (c) 2013 Alvaro Trigo &lt;alvaro@alvarotrigo.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
