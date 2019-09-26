///Required
var container = document.body;
var text = container.appendChild(document.createElement("p"))
text.innerText ="Do you like the cats?"
var img = document.createElement("img")
img.style.transition = "all 0.5s"
var picture = "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg"

text.onclick = function ( event ) {
	var image = event.target.appendChild (img)
	img.src = picture
	img.width = 100
}

img.onmouseover = function(event) {
	this.style = `
	width: 200px;	`
}

img.onclick = function (event) {
	event.stopPropagation()
	event.target.parentNode.removeChild(img)
}

///Additional

