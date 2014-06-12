
var x = 0;

(function func() {
	console.log(x);
	var x = 100;
	console.log(x);
})()

