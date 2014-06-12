
function T(name) {
	this.$name = name;
}

console.log(T.prototype);
console.log(T.prototype.constructor);
console.log(typeof T.prototype);
console.log(T.prototype instanceof T);
console.log(T.prototype instanceof Function);

T.prototype.func = function() {
	console.log(this);
	console.log(this.constructor);
	console.log('' + this);
	console.log('' + this.$name);
}


var t = new T(1);
t.func();

