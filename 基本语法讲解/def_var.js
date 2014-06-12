
var num = 1;

var str = '1';

var func = function() {
	
}

var funcInstance = new func();

var func1;

console.log('num = ' + num); // 1
console.log('str = ' + str); // 1
console.log('func = ' + func); // function(){ }
console.log('funcInstance = ' + funcInstance); // [object Object]

// 如果没有声明任何类型
console.log('func1 = ' + func1); // undefined --> 变量的默认值是undefined，而不是null
