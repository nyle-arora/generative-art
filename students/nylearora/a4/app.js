	
let canvasSize = [500, 300]
let canvasBackground = [100, 100, 100, 1] // Adjust the background color if you want
let curvePoints = []
let isPaused = false

document.onkeyup = function(e){
    if(e.keyCode == 32){
      	isPaused = !isPaused
    }
}


//=================================================
// Add your own sliders
let DEBUG_DRAW = {
	"GhostParticleSystem": false, 
	"PumpkinParticleSystem": false, 
	"SkullssParticleSystem": false
}

let SLIDER = {}
let sliderNames = {
	"ghostDrag": 0.5, 
	"ghostNumber": 0.5,
	"pumpkinMouseAttraction": 0.5, 
	"pumpkinNumber": 0.5, 
	"skullCohesion": 0.5, 
	"skullNumber": 0.5
}


//
let systemClasses = [
	GhostParticleSystem, 
	PumpkinParticleSystem, 
	SkullsParticleSystem
]

let mouse = new Vector(0,0)


//=================================================


let heatmapScale = 3
let heatmap

// Run this function after the page is loaded
window.addEventListener("load", function() {

	createSliders()


	//-------------------------------------------
	// INITIALIZE ALL THE PARTICLES
	// Create one of each particle system
	let systems = systemClasses.map(cl => new cl())

	//-------------------------------------------
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
				p.background(...canvasBackground)
			}	
				
			// Draw with processing
			p.draw = () => {


				if (!isPaused) {
					p.background(...canvasBackground)


					if (mouse.particle) {
						if (mouse.pressed)
							p.fill(0, 100, 50, .2)
						else
							p.noFill()
						p.stroke(0, 100, 50, .3)
						p.circle(...mouse.particle, 40)
					}
					if (mouse.selected) {
						p.fill(200, 100, 50, .2)
						p.stroke(200, 100, 50, .3)
						p.circle(...mouse.selected, 50)
					}
					

					// Update each particle system
					systems.forEach(sys => {
						sys.update(p)
					})

					// Draw each particle system
					systems.forEach(sys => {
						sys.draw(p)
					})

				}
			}



			

			p.mouseMoved = () => {
				mouse[0] = p.mouseX
				mouse[1] = p.mouseY
				let closestDist = 120
				let closest
				systems.forEach(sys => {
					if (sys.getClosest) {
						let pt = sys.getClosest(mouse, closestDist)
						if (pt) {
							let d = Vector.getDistance(mouse, pt)
							if (d < closestDist) {
								closestDist = d
								closest = pt
							}
						}
					}
				})
				mouse.particle = closest
			}
			
			// Use the mouse position to draw things
			p.mouseDragged = () => {
				mouse[0] = p.mouseX
				mouse[1] = p.mouseY
				// readHeatmapAt([p.mouseX, p.mouseY])
				if (mouse.particle) {
					mouse.particle.setToMultiple(mouse, 1)
				}
			}


			p.mousePressed = () => {
				if (mouse.particle == mouse.selected) {
					mouse.selected = undefined
				}
				else if (mouse.particle) {
					mouse.selected = mouse.particle
				}

				mouse.pressed = true
			}

			p.mouseReleased = () => {
				mouse.pressed = false
				// Reset any positions and the selected point
			}
		
	}, holderEl)

	
	// HEATMAP
	// A way to record information so that it can be read by agents later
	// Create the heatmap, which is also a P5 element
	heatmap = new p5(
		// Run after processing is initialized
		(p) => {
			// Set the size of the canvas that P5 thinks its using
			// Use HSL mode (WAAAYYY better than RGB!)
			p.colorMode(p.RGB);
			p.ellipseMode(p.ELLIPSE_RADIUS);
			
			
			// Setup processing
			p.setup = () => {
				p.createCanvas(canvasSize[0]/heatmapScale,canvasSize[1]/heatmapScale);
				p.background(0, 0, 0)
			}	
				
			// Draw with processing
			p.draw = () => {
				p.push()

				// Draw each particle system
				systems.forEach(sys => {
					if (sys.drawHeatmap)
						sys.drawHeatmap(p, heatmapScale)
				})
				p.pop()
			}
		},document.getElementById("heatmap"))


})


function readHeatmapAt(pt) {
	let x = pt[0]/heatmapScale
	let y = pt[1]/heatmapScale
	
	let val = heatmap.get(x, y)
	return val
}

function debugDrawHeatmap(p) {
	let tileSize = 10
	let tileW = p.width/tileSize
	let tileH = p.height/tileSize

	for (var i = 0; i < tileW; i++) {
		for (var j = 0; j < tileH; j++) {
			let x = i*tileSize
			let y = j*tileSize
			
			let c = readHeatmapAt([x,y])
			let c2 = RGBToHSL(...c)

			p.noStroke()
			p.fill(...c2, .2)
			
			p.rect(x - tileSize/2, y - tileSize/2, tileSize, tileSize)
		}
	}


}

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

function RGBToHSL(r,g,b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

   // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
      h += 360;
   // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h,s,l]
}


// Dynamically create all the sliders we might want
function createSliders() {
 	let toggleHolder = document.getElementById("toggles")
	systemClasses.forEach(sys => {
		let name = sys.name
 		let div = document.createElement("div")
 		let label = document.createElement("div")
 		let val = DEBUG_DRAW[name]
 		let toggle = Object.assign(document.createElement("input"),{
			type:"checkbox",
			checked:DEBUG_DRAW[name],
			id:"toggle" + name,
			
		})
		div.classList.add('slider')
		label.classList.add('label')
		label.innerText = name
		toggleHolder.append(div)
		div.append(label)
		div.append(toggle)
		let fxn = `DEBUG_DRAW.${name}=! DEBUG_DRAW.${name};`
		toggle.setAttribute("oninput", fxn);

	})


	let sliderHolder = document.getElementById("sliders")
	let keys = Object.keys(sliderNames)
	keys.forEach(name => {
		let defaultVal = sliderNames[name]
		SLIDER[name] = defaultVal
		let div = document.createElement("div")
		let label = document.createElement("div")
		div.classList.add('slider')
		label.classList.add('label')
		label.innerText = name
		let slider = Object.assign(document.createElement("input"),{
			type:"range",
			min:0,
			max:100,
			value:defaultVal*100,
			class:"slider",
			id:"slider_" + name,
			
		})
		slider.setAttribute("oninput", `SLIDER.${name}=this.value*.01;console.log('${name}:',this.value*.01)`);

		
		sliderHolder.append(div)
		div.append(label)
		div.append(slider)
	})
}