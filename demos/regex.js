
// Ö»»áÊä³ö?  
// var str = "\?";  
// console.log(str);

var regex = /[a-z]/i;


console.log(regex.exec('ab01'));
console.log(regex.exec('ab01')[0]);
console.log(regex.exec('ab01')[1]);


var regex = /\<img[\s]+src[\s]*=[\s"']*(http\:\/\/[^\s'"\/]+)/gi
var str = '<img src=http://www.baidu.com/>'
	+ '<img src = http://www.baidu.com/>'
	+ '<img src ="http://www.baidu.com/">';
console.log(str.match(regex));
console.log(regex.exec(str));
console.log(regex.exec(new String(str)));
console.log(regex.exec(str));

for (var i = 0; i < [1, 2].length; i ++) {

}
console.log(i);

// function T(){
	// this.$name = '';
	// this.func1 = function(){
		// console.log('func1' + $name);
		// func();
	// };
	
	// function func() {
		// console.log(this);
		// console.log('func2');
	// }

// }
// var t = new T();
// t.func1();

