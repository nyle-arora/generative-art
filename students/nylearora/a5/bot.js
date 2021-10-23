class CoffeeBot {
	constructor() {

		this.grammar = tracery.createGrammar(alienGrammar)
		this.grammar.addModifiers(baseEngModifiers)
	}

	respondTo(s) {

		if (s.toLowerCase().includes("four arms")){
			this.post("<img src='https://static.wikia.nocookie.net/ben10/images/d/d0/Four_arms_os_render.png/revision/latest?cb=20141129030943' width=60 height=90></img>")
			return this.grammar.flatten("#fourArms#");
			
		}
		else if (s.toLowerCase().includes("echo echo")){
			this.post("<img src='http://assets.stickpng.com/images/5a944a849fc609199d0fef0d.png' width=60 height=126></img>")
			return this.grammar.flatten("#echoEcho#");
		}
		else if (s.toLowerCase().includes("heatblast")){
			this.post("<img src='http://assets.stickpng.com/images/5a944b609fc609199d0fef1e.png' width=60 height=138></img>")
			return this.grammar.flatten("#heatBlast#");
		}
		
		else{
			return `Sorry Ben! '${s}' isn't an alien you have access to yet!`
		}
	}
}