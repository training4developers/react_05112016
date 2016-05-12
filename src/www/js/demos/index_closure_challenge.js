
var x=0, y=0, funcs=[];

for (; x<5; x++) {
	// edit the code between here
	// your code cannot evaluate console.log in the first loop
	// your code cannot use y
	// output 0 through 4
	// (function(h) {
	// 	funcs.push(function() {
	// 			console.log(h);
	// 	});
	// })(x);
	// and here
	let h = x;
	funcs.push(function() {
		console.log(h);
	});

}

for (; y<5; y++) {
	funcs[y]();
}
