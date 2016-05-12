
// iife - immediately invoked function expression

function outer() {

	var t = 4;

	setTimeout(function() {
		t = 56;
	}, 2000);

	return function inner() {
		console.log(t);
	};

}

var fn = outer();
fn();

setTimeout(function() {
	fn();
}, 4000);

console.dir(fn);



// (function() {
//
// 	var t = "Hello World";
//
// 	function doIt() {
//
// 		var y = 4;
//
// 		console.log(t);
//
// 	}
//
//
// 	doIt();
//
// })();
