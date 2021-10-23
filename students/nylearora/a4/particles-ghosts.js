// Create a particle system with an initialize, update, and draw function

class GhostParticleSystem {
	constructor() {
		this.gravity = [0, 10]

		this.particles = []
        this.makeGhosts()
	}

    makeGhosts(){
        this.ghostNum = Math.ceil(SLIDER.ghostNumber * 5)
        for (var i = 0; i < this.ghostNum; i++) {
			let particle = {
				idNumber: i,
				position: new Vector(Math.random()*canvasSize[0], Math.random()*canvasSize[1]),
				velocity: Vector.polar(100, Math.random()*6.28),
				borderForce: new Vector(0,0),
				wanderForce: new Vector(0,0),
				//mouseAttractorForce: new Vector(0,0)
			}
			this.particles.push(particle)
		}
    }

	update(p) {

        let newNum = Math.ceil(SLIDER.ghostNumber * 5)
        if (newNum != this.ghostNum){
            for (let i = 0; i < this.particles.length; i++) {
				delete this.particles[i]
			}
            this.particles = []
            this.makeGhosts()
        }

		let mouse = [p.mouseX - p.width/2, p.mouseY - p.height/2]
		let dt = p.deltaTime*.001
		// Don't update more than a tenth of a second at a time, even if we get out of sync
		dt = Math.min(.1, dt)
		let t = p.millis()*.001
		// console.log(t)
		//console.log(SLIDER)
		this.particles.forEach(pt => {

			// Stay inside a circle of "range": 
			// ie: apply an increasing force the farther you get outside the circle
			let dist = pt.position.magnitude
			let range = 50
			let distOutsideBorder = Math.max(0, dist - range)/range
			let borderStrength = 150*distOutsideBorder**2
			pt.borderForce.setToMultiple(pt.position, -borderStrength/dist)
			
			// Be attracted to the mouse (similar to range)
			// pt.mouseAttractorForce.setToDifference(mouse, pt.position)
			// pt.mouseAttractorForce.mult(SLIDER.mouseAttraction**2 * 10)

			// Wander around
			let wanderStrength = 300
			let wanderDirection = 15*p.noise(pt.idNumber, t*.2)
			pt.wanderForce.setToPolar(wanderStrength, wanderDirection)
			
			// Add all the forces to the velocity
			//pt.velocity.addMultiples(this.gravity, dt)
			pt.velocity.addMultiples(pt.borderForce, dt)
			pt.velocity.addMultiples(pt.wanderForce, dt)
			//pt.velocity.addMultiples(pt.mouseAttractorForce, dt)

			// Add some "drag"

			pt.velocity.mult(1 - .1*SLIDER.ghostDrag)

			// Update the position
			pt.position.addMultiples(pt.velocity, dt)
			
		})
	}

	draw(p) {
		p.background(0, 0, 0, .1)
		p.push()
		p.translate(p.width/2, p.height/2)
		this.particles.forEach(pt => {

			p.fill((pt.idNumber*10)%360,100,50)
			p.text("👻", ...pt.position)
			let debugDraw = DEBUG_DRAW[this.constructor.name]
			if (debugDraw){
				pt.velocity.drawArrow({p, 
					multiple:.4,
					center:pt.position, 
					color:[0,0,0]}) 

				let forceLengthMultiple = .2
				pt.borderForce.drawArrow({p, 
					multiple:forceLengthMultiple,
					center:pt.position, 
					color:[50,100,40]}) 

				pt.wanderForce.drawArrow({p, 
					multiple:forceLengthMultiple,
					center:pt.position, 
					color:[290,100,50]})
			}

		})

		p.pop()
	}
}