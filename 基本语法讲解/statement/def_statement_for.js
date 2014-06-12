var arr = ['1', '2', '3'];

console.log('arr = ');
console.log(arr);
console.log();

console.log('print normal: ');
for(var i = 0; i < arr.length; i++) {
	console.log('第' + (i + 1) + '项为' + arr[i]);
}
console.log();

// for each 中的参数为“属性名”而非属性值，在arr中体现为下标，在hash/map中体现为键名
console.log('print for/in: ');
for(a in arr) {
	console.log('第' + (a + 1) + '项为' + arr[a]);
}


function func1(func, param) {
	func(param);
}

function func2(param) {
	console.log(param);
}

func1(func2, '1');

// 模仿ruby的each
Array.prototype.each = function(callback) {
	console.log(this); // array object
	for(var i = 0; i < this.length; i ++) {
		//callback.call(this, i, this[i]);
		callback(i, this[i]);
	}
};

[1, 2, 3].each(function(index, value) {
	console.log(value);
});


Array.prototype.each.call([1, 2, 3], function(index, value) {
	console.log(value);
})

function(callback) {
	for(var i = 0; i < this.length; i ++) {
		callback(i, this[i]);
	}
};
