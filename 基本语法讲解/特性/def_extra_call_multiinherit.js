
function T1() {
	this.func1 = function() {
		console.log('T1.funct1');
	}
}
T1.prototype = new T1();

function T2() {
	this.func2 = function(param) {
		console.log('T2.funct2 param = ' + param);
		console.log('T2.funct2 = ' + this);
		console.log(this);
	}
}
T2.prototype = new T2();

// 主父类为T1
function Tt() {
	var t2_proto = T2.prototype;
	for (var prop in t2_proto) {
		var value = t2_proto[prop];
		if (value && (value instanceof Function)) {
			//this[prop] = function(params){
			//	console.log('inner ---------- ' + this.constructor);
			//	// value(params); // global
			//	value.call(this, params);
			//};
			
			this[prop] = value;
		}
	}
}
Tt.prototype = new T1();

// > T1.funct1
// > T2.funct2 param = 1
// > T2.funct2 = [object Object]
// > { func2: [Function] }
var tt = new Tt();
console.log(tt);
console.log();

tt.func1();
console.log();

tt.func2(1);