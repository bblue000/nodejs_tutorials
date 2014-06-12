
function func(param) {
	console.log('invoked, param = ' + param);
}

func('--------------');


console.log('func\'s type = ' + (typeof func)); // function
console.log('func\'s instanceof Function ? = ' + (func instanceof Function)); // true