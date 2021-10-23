// Create a particle system with an initialize, update, and draw function

// Boids have 3 forces
// - cohesion
// - alignment
// - separation


class SkullsParticleSystem {
	constructor() {
		this.boids = []
		this.averageVelocity = new Vector(0,0)
		this.averagePosition = new Vector(0,0)

		this.addSkulls()


	}

	addSkulls(){
		this.skullNum = Math.ceil(SLIDER.skullNumber * 10)
		for (var i = 0; i < this.skullNum; i++) {
			this.boids.push(new Boid(this))
		}
	}

	getClosest(point, range) {
		let closestDist = range
		let closest = undefined

		this.boids.forEach(b => {
			let d = Vector.getDistance(b.position, point)
			if (d < closestDist) {
				closest = b
				closestDist = d
			}
		})
		if (closest)
			return closest.position 
	}

	update(p) {

		let newNum = Math.ceil(SLIDER.skullNumber * 10)
        if (newNum != this.skullNum){
            this.boids = []
            this.addSkulls()
        }
		// Reset the velocity and position
		
		this.boids.forEach(b => b.update(p))


		this.averageVelocity.mult(0)
		this.averagePosition.mult(0)
		this.boids.forEach(b => {
			this.averageVelocity.add(b.velocity)
			this.averagePosition.add(b.position)
		})

		this.averageVelocity.mult(1/this.boids.length)
		this.averagePosition.mult(1/this.boids.length)
	}



	
	draw(p) {
		this.boids.forEach(b => b.draw(p))

		

		// Draw the average velocity and center of this flock
		if (DEBUG_DRAW[this.constructor.name]) {
			this.averageVelocity.drawArrow({p, 
				multiple:4,
				center:this.averagePosition, 
				color:[0,100,50]}) 
			p.fill(0, 100, 50)
			p.circle(...this.averagePosition, 10)
		}
	}
}


let boidCount = 0
class Boid {
	constructor(flock) {
		// Giving each boid a unique id will allow us 
		// to have diffent behavior for each flock member
		this.id = boidCount++

		// We need our flock to compare our position
		this.flock = flock

		this.angle = Math.random()*100

		this.position = new Vector(Math.random()*canvasSize[0], Math.random()*canvasSize[1])
		this.velocity = Vector.polar(.1, this.angle )

		this.forces = {
			wander: new Vector(0,0),
			thrust: new Vector(0,0),
			border: new Vector(0,0),
			alignment: new Vector(0,0),
			cohesion: new Vector(0,0),
			separation: new Vector(0,0)
		}
		this.totalForce = new Vector(0,0)
	}

	update(p) {
		let dt = Math.min(.1, p.deltaTime*.001)
		let t = p.millis()*.001
		
		this.totalForce.mult(0)

		this.forces.border.setToDifference(this.position, [p.width/2, p.height/2])
		this.forces.border.mult(-2)
		let d = this.forces.border.magnitude 
		if (d > 0) {
			let rangeStrength = Math.max(d - 300, 0)
			this.forces.border.mult(rangeStrength/d)
		}
		this.totalForce.add(this.forces.border)
		
		//------------------------------------
		// SEPARATION
		// If any other boids are too close, shove away
		this.forces.separation.mult(0)
		let offset = new Vector(0,0)
		this.flock.boids.forEach(b => {
			if (b !== this) {
				offset.setToDifference(this.position, b.position)
				let d = offset.magnitude

				let range = 40
				if (d < range && d !== 0) {
					// To close?
					// Use how close we are to create an appropriate force pushing us away
					let force = (d - range)/range
					this.forces.separation.addMultiples(offset, -400*force/d)
				
				}
			}
		})

		this.forces.separation.mult(0.5)
		this.totalForce.add(this.forces.separation)


		//------------------------------------
		// COHESION
		// Stay close to the center of my flock
		this.forces.cohesion.setToDifference(this.position, this.flock.averagePosition)
		this.forces.cohesion.mult(-2*SLIDER.skullCohesion)
		this.totalForce.add(this.forces.cohesion)

		//------------------------------------
		// ALIGNMENT
		// Get a push in the direction of my flock
		let speed = this.velocity.magnitude
		let flockSpeed = this.flock.averageVelocity.magnitude
		this.forces.alignment.mult(0)

		// console.log(speed, flockSpeed)
		if (speed !== 0 && flockSpeed !== 0) {
			// Get the difference between the normalized velocities (how far off is my velocity?)
			this.forces.alignment.addMultiples(this.velocity, -1/speed, this.flock.averageVelocity, 1/flockSpeed)
		}
		this.forces.alignment.mult(250)
		this.totalForce.add(this.forces.alignment)

		
		// Thrust
		this.forces.thrust.setToPolar(90, this.angle)
		this.totalForce.add(this.forces.thrust)


		// Drag
		this.velocity.mult(1 - .1*0.5)


		this.velocity.addMultiples(this.totalForce, dt)		
		this.position.addMultiples(this.velocity, dt)

		this.angle = this.velocity.angle

		// Wraparound
		// this.position[0] = (this.position[0]+p.width)%p.width
		// this.position[1] = (this.position[1]+p.height)%p.height
	}

	draw(p) {



		if (mouse.selected == this.position && DEBUG_DRAW.BoidsParticleSystem) {
			let colorIndex = 0
			for (var key in this.forces) {
				colorIndex += 1
				let f = this.forces[key]
				this.forces[key].drawArrow({p, 
					multiple:1,
					center:this.position, 
					color:[60*colorIndex,100,30]}) 
			}

		}

		p.push()
		p.translate(...this.position)

		p.fill(0)
		p.noStroke()

		p.textSize(20)
		p.text("💀", 0, 0)

		p.pop()
		
	}
}

