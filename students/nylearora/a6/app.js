	
let simCount = 0

let noise = (new p5()).noise

document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el : "#app",
		template: `<div id="app">
			This emoji essay argues the importance of following proper health procedures during the Covid-19 pandemic.
			Masks and vaccinations are the best way to stay healthy!

			This first simulation shows how easy it is for unmasked people to catch the virus if one of their neighbors
			has Covid. Masked people are generally safe.
			<simulation type="CovidSimulation" mode="gol" :dimensions="[25,20]" :tileSize="20" :factor="0" :vaccine="0"/>
			
			This next simulation cranks up the strength of the virus so that masked people can also catch Covid.
			Looks like we need vaccinations!
			<simulation type="CovidSimulation" mode="gol" :dimensions="[25,20]" :tileSize="20" :factor="0.7" :vaccine="0"/>
			
			This final simulation shows how getting vaccinated gets us herd immunity and people don't pass the virus to each other!
			<simulation type="CovidSimulation" mode="gol" :dimensions="[25,20]" :tileSize="20" :factor="0.7" :vaccine="1"/>
			
			
		</div>`,
		
	}) 
})



//==================================
// Grid utilities

// Create a grid of columns
function createGrid(w, h) {
	const grid = Array.from(new Array(w),()=>Array.from(new Array(h),()=>"-"));
	return grid
}

// Set a grid equal to a function
function setGrid(grid, fxn) {
	if (grid === undefined)
		console.warn("no grid!")
	if (fxn === undefined)
		console.warn("no function for setting the grid!")
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			grid[i][j] = fxn(i,j)
		}
	}
}

// Copy a grid
function copyGrid(dest, src) {
	for (var i = 0; i < src.length; i++) {
		for (var j = 0; j < src[i].length; j++) {
			dest[i][j] = src[i][j]
		}
	}
}
