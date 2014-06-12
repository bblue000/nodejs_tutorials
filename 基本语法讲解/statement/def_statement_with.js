var arr = new Array();

function pop() {
	console.log('external pop');
}
function func() {
	console.log('external function');
}

// with块内部所有的方法，<优先>从arr对象中获取
with(arr) {
	push(1);
	push(2);
	push(3);

	console.log('arr = ' + arr);
	console.log('pop first = ' + pop());
	
	func();
}

// with内部的this是{}对象，