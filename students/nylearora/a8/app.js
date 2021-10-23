
// Setup and Vue things

Vue.component("movie", {
	template: `<div class="tile">
		<h3>{{movie.title}} ({{movie.releaseYear}})</h3>

		<div class="content">
			<p>Directed by {{movie.directors}}</p>
			<p>Starring {{movie.actors}}</p>
			<p> {{movie.genres}}</p>
		</div>
	</div>
	`,

	// What data does this get from its parent?
	props: ["movie"]
})


const canvasW = 400
const canvasH = 400

document.addEventListener("DOMContentLoaded", function(){
	
	// Create a new Vue 

	new Vue({
		template: `<div class="columns">
			<div class="column">
				<select v-model="selectedGenre">
					<option v-for="option in genres" >{{option}}</option>
				</select>
				{{moviesSlice.length}} {{selectedGenre}} Bollywood movies:

				<movie v-for="item in moviesSlice" class="tile" :movie="item"  />
				
			</div>
				
			</div>
		</div>`,
		el: "#app",
	
		computed: {

			moviesSlice() {

				if (this.selectedGenre == "All"){
					return this.movies
				}
				
				let slice = this.movies.filter(item => {
					let genre = item.genre.toLowerCase()
					return genre.includes(this.selectedGenre.toLowerCase())
				})
			
				return slice
			},
		},
		data() {
			return {
				genres: ["All", "Romance", "Adventure", "Drama", "Musical", "Action", "Comedy", "Biography", "Crime", "Family", "Mystery", "Thriller", "Fantasy", "Music", "Documentary", "War", "History", "Horror", "Sci-Fi", "Animation", "Sport", "Western", "Short"],
				selectedGenre: "All",
				movies: bollywoodData,
			}
		},

		mounted() {
			// When this compentent is mounted, also create a processing instance 

		let p = new p5((p) => {
			// Save the noise fxn
			noise = p.noise


			let mousePos = []
			// Basic P5 setup
			p.setup = () => {
				p.createCanvas(canvasW, canvasH)
				p.colorMode(p.HSL)
				p.ellipseMode(p.RADIUS)

			}

			//-------------------------------------------
			// Mouse things

			p.mouseClicked = () => {
				if (p.mouseX > 0 && p.mouseX < canvasW && p.mouseY > 0 && p.mouseY < canvasH) {

				}
				// figure out where we clicked
			}
			//-------------------------------------------
			// Draw

			// p.draw = () => {
			// 	p.background(90)

			// 	this.bookSlice.forEach((book,index) => {
			// 		let pages = parseInt(book.num_pages)
			// 		let reviews = parseInt(book.text_reviews_count)
			// 		let rating = parseFloat(book.average_rating)
			// 		let year = new Date(Date.parse(book.publication_date)).getFullYear()
			// 		// console.log(pages)

			// 		let x = pages
			// 		let y = p.height*rating/5
			// 		p.noStroke()
			// 		p.fill(100, 0, 100, .3)
			// 		p.rect(x, y, 300, -10)

			// 		let hue = 4*(2020 - year)
			// 		p.fill(hue, 100, 30)
			// 		p.text(book.title, x, y)
			// 	})
			// }
		}, document.getElementById("p5"))
			}
		}) 
})


function compareDates(d0, d1) {
	// Convert dates from strings into UTF dates(number of millisecodnds since 1970)
	let d0Val = Date.parse(d0)
	let d1Val = Date.parse(d1)
	
	return d0Val - d1Val
}