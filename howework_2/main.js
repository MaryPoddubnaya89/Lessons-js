
///Required

var letters =[];
var string =  "Backend As A Service";
var arr = string.split(" ")

for (var i = 0; i < arr.length; i++) {
  alert( arr[i][0] );
  letters.push(arr[i][0]);
  letters.toString("")
}

//Additional

function isItNumber (param) {
	if(typeof param == 'number') {
		var d = new Date ();
		alert(d.toLocaleString ());
	} else {
		alert("Неверный тип данных");
	}
}

isItNumber(4)
