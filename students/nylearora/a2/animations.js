let animations = [
	// Each animation is represented an object
	// with a title, setup, and draw function
	// This one draws a circle moving around
	{
		title: "LED Lights",

		// Both draw and setup have access to the processing object "p"
		draw: function(p) {
			p.background(0, 0, 0);
			let t = p.millis();
			let x = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.1;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x, 20, 20);
				x += 25;
			}
			let x2 = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.2;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x2, 60, 20);
				x2 += 25;
			}
			let x3 = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.3;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x3, 100, 20);
				x3 += 25;
			}
			let x4 = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.4;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x4, 140, 20);
				x4 += 25;
			}
			let x5 = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.5;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x5, 180, 20);
				x5 += 25;
			}
			let x6 = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.6;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x6, 220, 20);
				x6 += 25;
			}
			let x7 = 10;
			for (let i = 0; i < 12; i++){
				let hue = t * 0.7;
				p.fill(hue%360, 100, 50, .4);
				p.circle(x7, 260, 20);
				x7 += 25;
			}
		}
	},

	// Use loops to draw multiple objects on screen
	{
		title: "Funky Camera",

		// Both draw and setup have access to the processing object "p"
		draw: function(p) {
			// let t = p.millis();
			// p.background(0, 0, 0);
            // let w = p.width
            // let h = p.height
			// let l1x1 = 0;
			// let l1x2 = w;
			// let l2x1 = 0;
			// let l2x2 = w;
			// let l1y1 = 0 + 100 * Math.sin(t * 0.1);
			// let l1y2 = h - 100 * Math.sin(t * 0.1);
			// let l2y1 = h - 100 * Math.sin(t * 0.1);
			// let l2y2 = 0 + 100 * Math.sin(t * 0.1);
			// p.stroke("red");
			// p.strokeWeight(4);
			// p.line(l1x1, l1y1, l1x2, l1y2);
			// p.stroke("green");
			// p.line(l2x1, l2y1, l2x2, l2y2);

			let t = p.millis();
			p.background(0, 0, 0);
			p.fill("blue")
			let wh = 100 * Math.sin(t * 0.1);

			p.rect(100, 100, 100, 100, 20);

			p.stroke("green");
			p.strokeWeight(4 * Math.sin(1));

			p.fill("red");
			let radius = 50 * Math.sin(t * 0.1);
			p.circle(150, 150, radius);
		}
	},

	{
		title: "Boom Tube",
		draw: function(p) {
			let w = p.width
			let h = p.height
			let hue = (100 + p.frameCount) % 360
			let t = p.frameCount * .001

			p.push()
			let scale = 5 * Math.sin(t * 20) + 1;
			p.scale(scale, scale)
			p.strokeWeight(4)
			p.stroke(hue, 100, 50, .1) // Oh, this looks nice if I reduce the alpha
			p.fill(hue, 100, 100)
			p.circle(50, 50, 20);
			p.pop()
		}
	}
]