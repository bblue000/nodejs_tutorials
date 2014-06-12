


// javascript中的“类”的实现基于函数
// > 单纯作为函数对象，其类型为function，其本身是一个Function“类”的对象
{
	function T() {

	}

	console.log('typeof T = ' + (typeof T)); // function
	console.log('T instanceof Object = ' + (T instanceof Object)); // true
	console.log('T instanceof Function = ' + (T instanceof Function)); // true
	console.log('T instanceof T = ' + (T instanceof T)); // false


	// 作为函数，其constructor属性实际是属于Function“类”的
	console.log('T.constructor = ' + T.constructor); // function Function() { [native code] }
}

console.log();

// > 作为“类”的声明，实际提供的是类的构造器
{
	function T() {

	}

	var t = new T();
	console.log('typeof t = ' + (typeof t)); // object
	console.log('t instanceof Object = ' + (t instanceof Object)); // true
	console.log('t instanceof Function = ' + (t instanceof Function)); // false
	console.log('t instanceof T = ' + (t instanceof T)); // true


	// 作为“类”
	// > 提供了constructor
	console.log('t.constructor = ' + t.constructor); // function T() {  }
}







