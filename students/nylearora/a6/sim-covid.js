
class CovidSimulation {
	// Some number of grids
	constructor(mode, dimensions, tileSize, factor, vaccine) {
		this.idNumber = simCount++
		// Mode can control various factors about the simulation
		this.dimensions = dimensions
		this.mode = mode
		this.tileSize = tileSize
		this.factor = factor
		this.vaccine = vaccine
		this.selectedCell = [3, 4]
		
		// Your simulation can have multiple layers, 
		// for example, it might have a 
		//  - a layer of sheep emoji, and a noise field of grass layers and a layer of wind vectors
		//  - a single layer of true/false for Game of Life
		
		this.values = createGrid(...this.dimensions)

		// Set up the grid with its initial values
		this.initialize()
	}


	// What are my initial values?
	initialize() {
		setGrid(this.values, (x, y) => {
			// Given x, y, set this cell to something
			if (Math.random() < .2)
				return "🙂"
			else if (Math.random() < .2) 
                return "😷"
            else if (Math.random() < .4)
                return "🤢"
		})

	}

	// A useful function for Game of Life
	getSickCount(x, y) {
		// How many of my neighbors have a non-zero value?
		let neighbors = this.getEightNeighborPositions(x, y, true)
		let sickCount = 0
		neighbors.forEach((pos) => {
			let nx = pos[0]
			let ny = pos[1]
			if (this.values[nx][ny] == "🤢")
				sickCount++
		})
		return sickCount
	}


	// When we update the simulation, 
	// we want write our next moves into a temporary "next-step" grid
	// And then once all the updates are done, 
	// copy that back into the original grid 

	step() {

		// Create a temporary grid to store the next positions
		let tempGrid = createGrid(...this.dimensions)
		
		setGrid(tempGrid, (x, y) => {
			// my current value
			let val = this.values[x][y]

			let sickCount = this.getSickCount(x, y)

			//if the emoji is unmasked and it has a neighbor with Covid, the emoji gets Covid
			//if it's vaccinated, it won't get COVID
			if (val == "🙂" && sickCount >= 1 && this.vaccine == 0){
				return "🤢"
			}
			//if the emoji is masked and the factor is low enough, it won't get covid
			//if the factor is high enough, it'll get covid
			//if the masked emoji is vaccinated though, it won't get covid
			if (val == "😷" && sickCount >= 1 && Math.random() <= this.factor && this.vaccine == 0){
				return "🤢"
			}

			if (val == "🤢" && this.vaccine == 1){
				return "🙂"
			}
			
			return val
			
		})


		// Swap all the buffers: copy the nextGrid into the current grid
		copyGrid(this.values, tempGrid)
	}



	//=====================================================
	// Drawing

	draw(p) {
		p.background(196, 100, 80)
		// Draw each cell
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		for (var i = 0; i < w; i++) {
			for (var j = 0; j < h; j++) {
				this.drawCell(p, i, j)
			}
		}
		
	}

	

	// Draw a cell.  Add emoji or color it
	drawCell(p, x, y) {

		// Alive or dead?
		let value = this.values[x][y]

		// Draw the black or white square
		p.strokeWeight(1)
		p.stroke(0, 0, 0)
		p.fill('white')

		if (value == "🤢"){
			p.fill(color(165, 242, 171))
		} else if (value == "🙂" || value == "😷"){
			p.fill((color(165, 215, 242)))
		}
	
		this.drawSquare(p, x, y)
		let w = this.tileSize
		let px = (x + .5)*w
		let py = (y + .5)*w


		p.textSize(w*.8)
		if(value)
			p.text(value, px - w*.4, py + w*.3)

	}

	//=====================================================
	// Mouse interactions

	select(x, y) {
		// console.log("Select", x, y)
		this.selectedCell = [x, y]
	}

	click(x, y) {
		console.log("Click", x, y)
		
	}

	drag(x, y) {
		this.values[x][y] = 1
	}



	//=====================================================
	// Utility functions

	toggleDebugInfo() {
		this.debugMode = !this.debugMode
	}

	// Handy utility to draw a single grid 
	drawSquare(p, col, row) {
		let w = this.tileSize
		let x = (col + .5)*w
		let y = (row + .5)*w
		p.rect(x - w/2, y - w/2, w, w)
	}

	// Handy utility to draw text 
	drawText(p, col, row, text) {
		let w = this.tileSize
		let x = (col + .5)*w
		let y = (row + .5)*w
		p.text(text, x - w/2, y - w*.1)
	}

	// Is this cell selected?
	isSelected(x, y) {
		return (this.selectedCell && this.selectedCell[0] == x && this.selectedCell[1] === y)
	}

	//------------------------------------------------
	// Neighbor positions
	getEightNeighborPositions(x1, y1, wrap) {
		return [...this.getNearestNeighborPositions(x1, y1, wrap),
		...this.getCornerNeighborPositions(x1, y1, wrap)]
	}

	getNearestNeighborPositions(x1, y1, wrap) {
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + w)%w
			x2 = (x2 + w)%w
			y0 = (y0 + h)%h
			y2 = (y2 + h)%h
		}
		
		return [[x1,y0],[x2,y1],[x1,y2],[x0,y1]]
	}
	getCornerNeighborPositions(x1, y1, wrap) {
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + w)%w
			x2 = (x2 + w)%w
			y0 = (y0 + h)%h
			y2 = (y2 + h)%h
		}
		
		return [[x0,y0],[x0,y2],[x2,y2],[x2,y0]]
	}


}