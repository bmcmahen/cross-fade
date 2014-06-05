
# cross-fade

  cross fade two images using canvas

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/cross-fade

## Example

This is probably best used in conjunction with `component/tween`, or it can be attached to scroll position. 

```javascript
var Fade = require('cross-fade');

var img = new Image();
img.src = 'img.jpg';

var img2 = new Image();
img2.src = 'img2.jpg';

var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 500;
canvas.height = 300;

img.onload = img2.onload = loaded;

var loads = 0;
function loaded(){
  loads++;
  console.log('loaded', loads);
  if (loads == 2) {
    buildFade();
  }
}

function buildFade(){
  var fade = new Fade(canvas, img, img2);
  fade.transition(0); // only the first image is shown
  fade.transition(0.5); // second image is faded in half way
  fade.transition(1); // img2 is fully visible 
}
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.