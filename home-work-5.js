///Required

function sampleFunc () {
	console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator ( func ) {
	return  func.bind("test1", "test", "sample");
}

testFunc = modificator( sampleFunc )
testFunc()
/////////

///Additional
function sampleFunc () {
	console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
	var codeLength = String(func).length
	console.info( `Symbols in my code: ${codeLength}` )
}

modificator( sampleFunc )
sampleFunc()
/////////
