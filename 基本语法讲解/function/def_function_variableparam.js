
// 方法内部隐式地提供了arguments变量，实际是一个hash/map
function func() {
	
	console.log('arguments = ');
	console.log(arguments);
	

}

func();
// {}

func(1);
// { '0': 1 }
