
function T1() {
	this.func1 = function() {
		console.log('T1.funct1');
	}
}

function T2() {
	this.func2 = function(param) {
		console.log('T2.funct2 param = ' + param);
		console.log('T2.funct2 = ' + this);
		console.log(this);
	}
}

// 可以通过prototype定义主父类
function Tt() {
	T1.call(this);
	T2.call(this);
}

var tt = new Tt();
// > { func1: [Function], func2: [Function] }
console.log(tt);

// > T1.funct1
tt.func1();

// > T2.funct2 param = 1
// > T2.funct2 = [object Object]
// > { func1: [Function], func2: [Function] }
tt.func2(1);