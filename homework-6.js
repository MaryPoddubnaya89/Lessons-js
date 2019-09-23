///Required
var container = document.body;
var elements = ""
var tags = [
"main",
"section",
"article",
"div"
];

var classes = [
"info",
"holder",
"post",
"wrap"
];

for (i = 0; i < tags.length; i++) {
	elements = container.appendChild(
		document.createElement(tags[i])
		).classList.add(classes[i])
}

document.head.appendChild(document.createElement("style")).textContent =`
.info {
	background: #eee;
	width: 100%;
	height: 100%;
}

.holder {
	box-shadow: 2px 2px 2px #000;
	width: 200px;
	height: 200px;
	border-radius: 50%;
}

.post {
	border: 1px solid #f00;
	width: 200px;
	height: 200px;
}

.wrap {
	width: 200px;
	height: 200px;
	border: 3px solid green;
}

`

///Additional №1
var container = document.body;
var result = []

var elements = [ 
{
	tag: "main",
	attrs: {
		className: "container",
		title: "Контейнер",
		style: `
		position: absolute;
		top: 0;
		width: 200px;
		height: 200px;
		left: 20px;
		border-radius: 50%;
		border: dotted 2px red;
		`,
		onclick : function ( event ) {
			console.log ( this.className )
		}
	}
},
{ 
	tag: "section", 
	attrs: {
		className: "section",
		title: "Секция",
		style: `
		position: absolute;
		top: 100px;
		left: 20px;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		border: dotted 2px green;
		`,
		onclick : function ( event ) {
			console.log ( this.className )
		}
	}
},
{ 
	tag: "article", 
	attrs: {
		className: "article",
		title: "Секция",
		style: `
		position: absolute;
		top: 200px;
		left: 20px;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		border: dotted 2px pink;
		`,
		onclick : function ( event ) {
			console.log ( this.className )
		}
	}
},
]

for ( var elem of elements ) {
	var tag = document.body.appendChild ( document.createElement ( elem.tag ) )

	for ( var attr in elem.attrs ) {
		tag [ attr ] = elem.attrs [ attr ]
	} 
}

/// Additional № 2
var style = document.head.appendChild(document.createElement('style'))
var container = document.body

style.textContent = `
.redBack {
	background: red!important;
	width: 100px;
	height: 100px;
} `

var tags = [ "header", "footer", "main", "div", "p" ]
for(var tag of tags){
	var elem = container.appendChild(
		document.createElement(tag)
		)
}

for(var elem of document.body.children){
	elem.tagName === "SCRIPT" ? null : 
	elem.classList.add('redBack')
}
