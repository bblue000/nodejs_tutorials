
function func() {
	if (arguments && arguments.length > 0) {
		for(var arg in arguments) {
			console.log(arguments[arg]);
		}
	}
}

func(1, 'a', {});

var f = new func(1, 'a', {});

