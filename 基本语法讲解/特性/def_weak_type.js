
// 一个变量能够接收任意类型的对象，隐式转换
var param = 1;

param = "1";

param = [];

param = {};

param = function() {

}

// 好的命名习惯可以避免一些麻烦

var str = "test";

for(c in str) {
	console.log(c);
}
