
masks.nyle = function( p) {
	
	p.background(210, 100, 80)

	//face.points.forEach(pt => p.circle(...pt, 3))
	
	// Get the two side contours of the face
	let sideContours = face.sides.map(side => {
		return side.faceRings[0]
	})
	
	// Join them together into a single continous contour
	let faceContour = joinSides(...sideContours)
	p.stroke(51)

	p.strokeWeight(1)
	p.fill(34, 140, 0)

	drawSmoothContour(p, faceContour, true)

	p.stroke(255, 255, 255)
	lWeight = SLIDER.eyeBorder*10 + 1
	p.strokeWeight(lWeight)
	fring2 = face.sides[0].faceRings[1][10]
	fring = face.sides[0].faceRings[0][2]
	p.line(fring[0], fring2[1], fring[0], fring[1])

	eyeSize = SLIDER.eyeSize * 50
	
	face.sides.forEach(side => {
		//Draw eyes
		p.fill(70, 179, 64)
		p.circle(...side.eye, eyeSize)
	})

	console.log(hand)
	fingerSize = SLIDER.fingerSize * 10
	for (let i = 0; i < hand.length; i++){
		hand[i].fingers.forEach(finger => {
			p.stroke(1)
			p.fill(34, 140, 0)
			drawRibbon(p, finger, (pct, sideIndex) => {
				return fingerSize
			})
		})
	}
}
