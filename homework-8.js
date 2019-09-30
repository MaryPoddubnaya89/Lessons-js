///Requared
var counter = 10
var container = document.body
var text = container.appendChild(
	document.createElement("div")
	)
function checkTime() {
	if(counter--) {
		text.textContent = new Date().toLocaleTimeString()
		setTimeout ( checkTime, 1000 )
	}
}
checkTime()

///Additional №1
var typeMessage = ( function ( velocity ) {
	let container = document.body.appendChild (
		document.createElement ( "p" )
		)
	container.style = `color: magenta;`
	container.id = "demo"
	let index = 0
	return function ( message ) {
		let ind = index
		setTimeout(
			function() {
				container.textContent += message[ind]
			},
			1000 * velocity  * ind
			)
		return index++ < message.length - 1 ? arguments.callee(message) : null
	}
})( 1 )

typeMessage ( `Welcome to the hell` )
