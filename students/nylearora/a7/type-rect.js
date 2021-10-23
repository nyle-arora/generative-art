
class Triangle {
	// Create a branching system  Each branch can hold other branches
	constructor(aof) {
		
		this.aof = aof
		this.center = new Vector()
		this.height = 0; 
		this.width = 0; 
		this.hue = new Vector(0, 0, 0)
		this.rotation = 0; 
		this.shear = 0; 
	}


	update(p, t, dt) {
		this.height = this.aof.get("height")*100 + 20;
		this.width = this.aof.get("width")*100 + 20;
		this.hue = this.aof.get("hue")
		this.rotation = this.aof.get("rotation") * 10
		this.shear = this.aof.get("shear") * 5
	}	

	draw(p) {
		// let w = this.aof.get("width")*100 + 50
		// let hue = this.aof.get("hue")*360

		// p.fill(hue, 100, 50)
		// p.rect(0, 0, w, -200)
		p.fill(Math.floor(this.hue*360), 50, 80)
		p.translate(0, -150)
		p.rotate(this.rotation)
		p.shearX(this.shear)
		let startX = 0
		let startY = 0
		p.triangle(startX - this.width/2, startY + this.height, startX, startY, startX + this.width/2, startY + this.height)
		//console.log("hi", Math.floor(this.color*100))
	}
}






// Optional background: drawn once per population
Triangle.drawBackground = function(p) {
	p.background(190, 80, 90)
}

// Static properties for this class
Triangle.landmarks = {
	"red": [0.7, 0.6, 0.65, 0.75, 0.73, 0.71, 0.68],
	"low-rotation": [0.01,0.00,0.00,0.03,0.02,0.04,0.04],
	"low-shear": [0.0, 0.01, 0.0, 0.01, 0.0, 0.01, 0.0],
	"tall-triangles": [0.8,0.70,0.84,0.74,0.74,0.80,0.83],
	"wide-triangles": [0.7,0.64,1.00,0.81,0.71,0.80,0.90]
}
Triangle.labels = ["width", "height", "hue", "rotation", "shear"]

