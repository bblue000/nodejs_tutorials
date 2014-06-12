// case 使用的是===（全等），即类型和值相等

var str = 'test1';


switch(str) {
	case '1':
		break;
	case 'test1':
		console.log('find!');
		break;
	default:
		console.log('others!');
		break;
}


var arr = [1, 2];
console.log('judge = ' + (arr == [1, 2])); // 复杂类型，需要满足同一个对象或函数
var arr2 = arr;
switch(arr) {
	case [3, 4]:
		break;
	case [1, 2]:
		console.log('find by const!');
		break;
	case arr2:
		console.log('find by variable!');
		break;
	default:
		console.log('others!');
		break;
}