[![placeholder](https://img.sixteenbit.dev/880x660/42b983/fff)](https://img.sixteenbit.dev/880x660/42b983/fff ':id=preview')

## Documentation

### Size

#### width x height

Height is optional, if no height is specified the image will be a square.

```html
<img src="https://img.sixteenbit.dev/300" alt="300x300 placeholder">
```

![Square 300px placeholder](https://img.sixteenbit.dev/300)

!> **Must** be the first option in the url

### Colors

#### background color / text color

*   Colors are represented as hex codes (**#ffffff** is white)
*   Colors always follow the dimensions, [https://img.sixteenbit.dev/250/ffffff/000000](250/ffffff/000000) not [https://img.sixteenbit.dev/ffffff/250/000000](ffffff/250/000000)
*   The first color is always the background color, and the second color is the text color.
*   The background color is optional and defaults to gray (#cccccc)
*   The text color is optional and defaults to black (#000000)
*   There are shortcuts for colors
	*   3 digits will be expanded to 6, 09f becomes 0099ff
	*   2 digits will be expanded to 6, ef becomes efefef
	*   1 digit will be repeated 6 times, c becomes cccccc Note: a single 0 will not work, use 00 instead.
*   Standard image sizes are also available. See the [complete list](?id=standard-image-sizes).
	*   [https://img.sixteenbit.dev/qvga](https://img.sixteenbit.dev/qvga)
	*   [https://img.sixteenbit.dev/skyscraper/f0f/f](https://img.sixteenbit.dev/skyscraper/f0f/f)

### Image Formats

#### .gif, .jpg, .png

*   Adding an image file extension will render the image in the proper format
*   Image format is optional and the default is a gif
*   jpg and jpeg are the same
*   The image extension can go at the end of any option in the url
	*   [https://img.sixteenbit.dev/300.png/09f/fff](300.png/09f/fff)
	*   [https://img.sixteenbit.dev/300/09f.png/fff](300/09f.png/fff)
	*   [https://img.sixteenbit.dev/300/09f/fff.png](300/09f/fff.png)

### Custom Text

#### &text=Hello+World

*   Custom text can be entered using a query string at the very end of the url.
*   This is optional, default is the image dimensions (<span class="example">300×250</span>)
*   a-z (upper and lowercase), numbers, and most symbols will work just fine.
*   Spaces become +
	*   [https://img.sixteenbit.dev/200x300&text=img.sixteenbit.dev+rocks!](https://img.sixteenbit.dev/200x300&text=img.sixteenbit.dev+rocks!)
*   The font used is from the freely available [M+ Font Project](http://mplus-fonts.sourceforge.jp)

The following characters need to be encoded using the UTF-8 Hex version in order to be rendered properly.

<table>
	<thead>
		<tr>
			<th>Character</th>
			<th>UTF-8 Hex Equivalent</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>+</td>
			<td><a href="480&text=Plus+Sign=0x2B">0x2B</a></td>
		</tr>
		<tr>
			<td>#</td>
			<td><a href="480&text=Number+sign+(Octothorp)=0x23">0x23</a></td>
		</tr>
		<tr>
			<td>%</td>
			<td><a href="480&text=Percent+symbol=0x25">0x25</a></td>
		</tr>
		<tr>
			<td>&amp;</td>
			<td><a href="480&text=Ampersand=0x26">0x26</a></td>
		</tr>
	</tbody>
</table>

You'll run into problems trying to manually enter a dimension as text if the numbers use the UTf-8 Hex values above, like [https://img.sixteenbit.dev/&text=400x250](https://img.sixteenbit.dev/480&text=400x250). Use a multiplication symbol, × instead (not an x character) to get around this, [https://img.sixteenbit.dev/&text=400×250](https://img.sixteenbit.dev/&text=400×250).

If you need to use other unicode characters, look up their UTF-8 Hex version at [http://www.fileformat.info/info/unicode/char/search.htm](http://www.fileformat.info/info/unicode/char/search.htm)

### Standard Image Sizes

Several standard dimensions are included in img.sixteenbit.dev including [ad sizes](http://www.iab.net/iab_products_and_industry_services/1421/1443/1452) and [screen resolution sizes](http://en.wikipedia.org/wiki/File:Vector_Video_Standards2.svg).

### Ad Sizes

|Keyword|Shortcuts|Dimensions|Regular Expression|
|--- |--- |--- |--- |
|[mediumrectangle](https://img.sixteenbit.dev/)|[medrect](https://img.sixteenbit.dev/)|300×250|^(med)\w+(rec\w+)|
|[squarepopup](https://img.sixteenbit.dev/)|[sqrpop](https://img.sixteenbit.dev/)|250×250|^(s\w+pop)|
|[verticalrectangle](https://img.sixteenbit.dev/)|[vertrec](https://img.sixteenbit.dev/)|240×400|^(ver)\w+(rec)|
|[largerectangle](https://img.sixteenbit.dev/)|[lrgrec](https://img.sixteenbit.dev/)|336×280|^(large|lrg)(rec)|
|[rectangle](https://img.sixteenbit.dev/rectangle)|[rec](https://img.sixteenbit.dev/rec)|180×150|^(rec)|
|[popunder](https://img.sixteenbit.dev/popunder)|[pop](https://img.sixteenbit.dev/pop)|720×300|^(pop)|
|[fullbanner](https://img.sixteenbit.dev/fullbanner)|[fullban](https://img.sixteenbit.dev/fullban)|468×60|^(f\w+ban)|
|[halfbanner](https://img.sixteenbit.dev/halfbanner)|[halfban](https://img.sixteenbit.dev/halfban)|234×60|^(h\w+ban)|
|[microbar](https://img.sixteenbit.dev/microbar)|[mibar](https://img.sixteenbit.dev/mibar)|88×31|^(m\w+bar)|
|[button1](https://img.sixteenbit.dev/button1)|[but1](https://img.sixteenbit.dev/but1)|120×90|^(b\w+1)|
|[button2](https://img.sixteenbit.dev/button2)|[but2](https://img.sixteenbit.dev/but2)|120×60|^(b\w+2)|
|[verticalbanner](https://img.sixteenbit.dev/verticalbanner)|[vertban](https://img.sixteenbit.dev/vertban)|120×240|^(ver\w+ban)|
|[squarebutton](https://img.sixteenbit.dev/squarebutton)|[sqrbut](https://img.sixteenbit.dev/sqrbut)|125×125|^(s\w+but)|
|[leaderboard](https://img.sixteenbit.dev/leaderboard)|[leadbrd](https://img.sixteenbit.dev/leadbrd)|728×90|^(lea\w+rd)|
|[wideskyscraper](https://img.sixteenbit.dev/wideskyscraper)|[wiskyscrpr](https://img.sixteenbit.dev/wiskyscrpr)|160×600|^(w\w+sk\w+r)|
|[skyscraper](https://img.sixteenbit.dev/skyscraper)|[skyscrpr](https://img.sixteenbit.dev/skyscrpr)|120×600|^(sk\w+r)|
|[halfpage](https://img.sixteenbit.dev/halfpage)|[hpge](https://img.sixteenbit.dev/hpge)|300×600|^(h\w+g)|

### Screen Standards

|Keyword|Dimensions|
|--- |--- |
|[cga](https://img.sixteenbit.dev/cga)|320x200|
|[qvga](https://img.sixteenbit.dev/qvga)|320x240|
|[vga](https://img.sixteenbit.dev/vga)|640x480|
|[wvga](https://img.sixteenbit.dev/wvga)|800x480|
|[svga](https://img.sixteenbit.dev/svga)|800x480|
|[wsvga](https://img.sixteenbit.dev/wsvga)|1024x600|
|[xga](https://img.sixteenbit.dev/xga)|1024x768|
|[wxga](https://img.sixteenbit.dev/wxga)|1280x800|
|[wsxga](https://img.sixteenbit.dev/wsxga)|1440x900|
|[wuxga](https://img.sixteenbit.dev/wuxga)|1920x1200|
|[wqxga](https://img.sixteenbit.dev/wqxga)|2560x1600|

### Video Standards

|Keyword|Dimensions|
|--- |--- |
|[ntsc](https://img.sixteenbit.dev/ntsc)|720x480|
|[pal](https://img.sixteenbit.dev/pal)|768x576|
|[hd720](https://img.sixteenbit.dev/hd720)|1280x720|
|[hd1080](https://img.sixteenbit.dev/hd1080)|1920x1080|
