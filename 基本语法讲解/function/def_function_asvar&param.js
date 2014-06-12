
// 函数变量可以直接调用
var func = function(param) {
	console.log('invoked, param = ' + param);
}
func();


// 函数动作转发——包装
function callFunc(func, param) {
	func(param);
}
callFunc(func, '==============');