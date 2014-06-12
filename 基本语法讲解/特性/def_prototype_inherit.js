
function T() {
	
}
T.prototype = new T();

function Tt() {
	
}
Tt.prototype = new T();
Tt.prototype.advancedFunc = function(){};

var t = new T();
var tt = new Tt();
console.log('t instanceof T ? ' + (t instanceof T)); // true
console.log('t instanceof Tt ? ' + (t instanceof Tt)); // false
console.log('tt instanceof T ? ' + (tt instanceof T)); // true
console.log('tt instanceof Tt ? ' + (tt instanceof Tt)); // true

console.log(t.constructor); // [Function: T]
console.log(tt.constructor); // [Function: T]
console.log(T.prototype.constructor); // [Function: T]
console.log(Tt.prototype.constructor); // [Function: T]
console.log(Tt.prototype instanceof T); // true




console.log();

function T() {
	
}
T.prototype = new T();


function Tt() {
	
}
Tt.prototype = T.prototype;

var t = new T();
var tt = new Tt();

console.log('t instanceof T ? ' + (t instanceof T)); // true
console.log('t instanceof Tt ? ' + (t instanceof Tt)); // true
console.log('tt instanceof T ? ' + (tt instanceof T)); // true
console.log('tt instanceof Tt ? ' + (tt instanceof Tt)); // true

// 结论：instanceof根据prototype判断对象的类型



