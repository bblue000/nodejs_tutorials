
// 设想：
// 在某些地方需要对系统的I/O操作进行自定义的释放，有两种方式：
// 方式一：
var file = new File(some_path);
function close() {
	this.some_release_func1();
	this.some_release_func2();
	...
}
close.call(file); // call方法的作用是将方法内部的this指针转移

// 方式二：
// 可以直接给File的原型添加方法
File.prototype.close = function() {
	this.some_release_func1();
	this.some_release_func2();
	...
}


