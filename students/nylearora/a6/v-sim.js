
/* 
 * Vue component for a single simulation
 * You don't need to edit this unless you want to change the UI elements
 */

Vue.component("simulation", {
	template: `
	<div class="simulation">
		<div><i>{{type}}:</i><b>{{mode}}</b></div>
		
		<div class="p5-holder" ref="p5holder"></div>

		<div class="controls">

			<!-- example of a custom UI element -->
			<button v-if="type==='GameOfLifeSimulation'" @click="sim.setToGlider()">glider</button>
			<button v-if="type==='DustSimulation'" @click="sim.randomPattern()">pattern</button>
			
			
			
			<button class="emoji-button" @click="sim.initialize()">🎲</button>
			<button class="emoji-button" @click="sim.step()">🥾</button>
			<button class="emoji-button" @click="isPaused=!isPaused">{{isPaused?"▶️":"⏸"}}</button>
		</div>
	</div>
	`,
	mounted() {

		console.log(this.type)
		this.sim = eval(`new ${this.type}(this.mode, this.dimensions, this.tileSize, this.factor, this.vaccine)`);

		// this.sim = new window[this.type](this.mode, this.dimensions, this.tileSize)
		

		// Setup a p5 for this grid view
		let gridP5 = new p5(p => {
			let getCell = () => {
				let x = Math.floor(p.mouseX/this.tileSize)
				let y = Math.floor(p.mouseY/this.tileSize)
				x = Math.max(0,x)
				y = Math.max(0,y)
				return [x,y]
			}

			
			p.setup = () => {
				let w = this.tileSize*this.dimensions[0]
				let h =  this.tileSize*this.dimensions[1]
				p.createCanvas(w, h);
				p.colorMode(p.HSL)
			}
			p.draw = () => {
				this.sim.draw(p)
				if (this.sim.paused) {
					this.noFill()
					this.stroke(0)
					this.sim.circle(0, 0, 100)
				}
				
			}

			p.mouseMoved = () => {
				if (p.canvas.parentNode.querySelector(":hover") == p.canvas) {	
					this.sim.select(...getCell())
				}
			}

			p.mouseDragged = () => {
				if (p.canvas.parentNode.querySelector(":hover") == p.canvas) {
					this.sim.drag(...getCell())
				}
			}
			p.mouseClicked = () => {
				if (p.canvas.parentNode.querySelector(":hover") == p.canvas) {
					this.sim.drag(...getCell())
				}
			}
			
		}, this.$el)

		// Handle updating this simulation
		let count = 0
		setInterval(() => {
			if (count < 50000 && !this.isPaused ) {

				this.sim.step()
			}
			count++
		}, this.speed)
	},
	
	props:{
		"mode": {},
		"dimensions": {},
		"tileSize": {}, 
		"type":{},
		"factor":{},
		"vaccine":{},
		"speed":{default: 300}
	},

	data() {
		return {
			// Start off paused
			isPaused: true,
			// Create a new simulation with this mode and dimensions
			sim: undefined
		}
	}


})