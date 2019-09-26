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
var collection = ["main", "section", "article", "div"]
var titles =  [ "first", "second", "third", "fourth" ]
var deleted = []
var container = document.body
for (var i = 0; i < collection.length; i++) {
	var elem = container.appendChild(document.createElement(collection[i]))

	elem.setAttribute('title', titles[i])

	elem.style = `
	background-color: #ff00ff50;
	border: dotted 1px yellow;
	padding: 60px;
	transition: all 0.5s;
	`

	elem.onclick = function(event) {
		event.stopPropagation()
		deleted.push(event.target.parentNode.removeChild(event.target))
	}

	elem.onmouseover = function(event) {
		event.stopPropagation()
		event.target.style.background = '#ffff0050'
	}

	elem.onmouseout = function(event) {
		event.target.style.background = '#ff00ff50'
	}

	container = elem 
}
