	
let canvasSize = [300, 300]



// Run this function after the page is loaded
window.addEventListener("load", function() {
	console.log("Hello, drawing tool!")

	document.getElementById("color0").value = HSLToHex(...tool.color0)
	document.getElementById("color1").value = HSLToHex(...tool.color1)


	// CREATE SOME HOLDERS FOR PROCESSING TO RUN IN
	let holderEl = document.getElementById("main")
	
	
	let mainP5 = new p5(

		// Run after processing is initialized
		function(p) {
			// Set the size of the canvas that P5 thinks its using
			// Use HSL mode (WAAAYYY better than RGB!)
			p.colorMode(p.HSL);
			p.ellipseMode(p.ELLIPSE_RADIUS);

			// Setup processing
			p.setup = () => {
				p.createCanvas(...canvasSize);
				p.background("white")
				
			}

			// Draw with processing
			p.draw = () => {
				p.fill(100, 0, 100, .2)
				p.noStroke()
				p.rect(0, 0, 100, 10)
				
				p.fill(0)
				p.text(tool.mode, 3, 10)

        if (tool.mode == 'clear')
          p.background("white")
			}

			// Use the mouse position to draw things
			p.mouseDragged = () => {
				// Get the drawing function for this tool
				let fxn = tools[tool.mode]
				fxn(p, tool.size, tool.color0, tool.color1)
			}

			p.mouseReleased = () => {
				console.log("Mouseup!")
				positions = []
			}
		}, holderEl)

	
})




// Hex to HSLA conversion adapted from
// https://css-tricks.com/converting-color-spaces-in-javascript/
// But now it resutn
function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
  	r = "0x" + H[1] + H[1];
  	g = "0x" + H[2] + H[2];
  	b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
  	r = "0x" + H[1] + H[2];
  	g = "0x" + H[3] + H[4];
  	b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
  cmax = Math.max(r,g,b),
  delta = cmax - cmin,
  h = 0,
  s = 0,
  l = 0;

  if (delta == 0)
  	h = 0;
  else if (cmax == r)
  	h = ((g - b) / delta) % 6;
  else if (cmax == g)
  	h = (b - r) / delta + 2;
  else
  	h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
  	h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return [h, s, l]
}

function HSLToHex(h,s,l) {

  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0, 
      b = 0; 

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}