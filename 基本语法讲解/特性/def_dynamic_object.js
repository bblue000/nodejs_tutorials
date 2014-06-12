
// 声明一个动态类型对象
var simple = 's';

var object = {
	'name': '',
	'age': 0,
	simple: ''
};
console.log('object.constructor = ' + object.constructor);
console.log(object);

object.name = 'obj.name';
object['age'] = 'obj.age'; // --> 属性值可以是变量（相当之动态）
var attr = 'attr1';
object[attr] = 'obj.attr'; // --> 属性值可以是变量（相当之动态）


console.log(object); // { name: 'obj.name', age: 'obj.age', attr1: 'obj.attr' }


var object = {
	'name': '',
	'age': 0,
	simple: ''
};
eval('(function T(param){ '
		+ 'var param = 10; '
		+ 'console.log(Math.pow(2, param)); '
		+ 'console.log(object); '
	+ '})()'); // 1024