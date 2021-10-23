
let positions = []

// You may want to change these starting values
let tool = {
	color0: [36, 100,50],
	color1: [265, 100, 50],
	size: 1,
	mode: "pencil"
}


let tools = {
	
	pencil(p, size, color0, color1) {

		p.stroke(...color1)
		p.strokeWeight(size*2)
		p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
		p.stroke(...color0)
		p.strokeWeight(size*2)
		p.line(p.mouseX, p.mouseY - 2 * size, p.pmouseX, p.pmouseY - 2 * size)
	},

	eraser(p, size, color0, color1) {

		let mouse = [p.mouseX, p.mouseY]
		p.noStroke()
		p.fill('white')
		p.circle(...mouse, 20 * size)
	},

	eggPencil(p, size, color0, color1){
		let mouse = [p.mouseX, p.mouseY]

		p.noStroke()
		p.fill(...color1)
		p.circle(...mouse, 10*size)
		p.fill(...color0)
		p.circle(mouse[0], mouse[1], 7 * size)
	},

	trianglePencil(p, size, color0, color1){
		let mouse = [p.mouseX, p.mouseY]

		p.noStroke()
		p.fill(...color0)
		p.triangle(p.mouseX, p.mouseY, p.mouseX + 10, p.mouseY - 10, p.mouseX + 20, p.mouseY)
		p.fill(...color1)
		p.triangle(p.mouseX, p.mouseY-10, p.mouseX + 10, p.mouseY - 20, p.mouseX + 20, p.mouseY-10)
		p.fill(...color1)
		p.triangle(p.mouseX, p.mouseY+10, p.mouseX + 10, p.mouseY, p.mouseX + 20, p.mouseY+10)

	},

	food(p, size, background, color) {

		let emojiOptions = ["🍎", "🧀", "🍕", "🌮", "🎂", "🍪"]
		
		let index = Math.floor(emojiOptions.length * Math.random())
		let emoji = emojiOptions[index]
		
		let x = p.mouseX
		let y = p.mouseY

		x += 10*size*(Math.random() - .5)
		y += 10*size*(Math.random() - .5)

		p.fill(...color, 1)
		p.textSize(Math.sqrt(size)*10)

		if (Math.random() < .8)
			p.text(emoji, x, y)
	},

	villain(p, size, background, color0, color1) {

		let flip = true;
		let emojiOptions = ["green goblin", "venom", "doc ock", "mysterio", "jackal", "mr. negative"]
		
		let index = Math.floor(emojiOptions.length * Math.random())
		let emoji = emojiOptions[index]
		
		let x = p.mouseX
		let y = p.mouseY

		x += 10*size*(Math.random() - .5)
		y += 10*size*(Math.random() - .5)

		if (flip){
			p.fill(...color0, 1)
			flip = false;
		} else {
			p.fill(...color1, 1)
			flip = true;
		}
		p.textSize(Math.sqrt(size)*10)

		if (Math.random() < .8)
			p.text(emoji, x, y)
	},

	curvePencil(p, size, color0, color1, drawCount) {
		let t = p.millis()*.001
		positions.push([p.mouseX, p.mouseY])
		
		p.noFill()

		let lineColor = color1.slice()
		lineColor[2] += Math.random() + 220*p.noise(t*6) - 120

		p.stroke(...lineColor, .5*Math.random())
		
		size += 12*p.noise(t*.85)
		// Step backwards along the curve
		let jump = 8
		let count = 8
		
		p.beginShape()
		for (var i = 0; i < count; i++) {
			let index = positions.length - 1 - i*jump
			if (index > 0) {
				let pos = positions[index].slice()
				let scribbleSize = 1
				pos[0] += scribbleSize*size*(Math.random() - .75)*i
				pos[1] += scribbleSize*size*(Math.random() - .75)*i
				p.curveVertex(...pos)
			}
		p.endShape()
		}
	}
}