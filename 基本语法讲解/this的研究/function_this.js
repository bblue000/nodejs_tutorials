

function func() {
	console.log('outer func this = ' +this);
}

func(); // global


function T() {
	func(); // global
	func.call(this);
	
	this.func = func;
	
	function func2() {
		console.log('inner func2 this = ' +this);
	}
	func2();
}

T.prototype.func3 = function() {
	console.log('prototype func3 this = ' +this);
	
}

T();
console.log();

var t = new T();
console.log();

console.log('invoke t.funct: ');
t.func();
console.log();


t.func3();


