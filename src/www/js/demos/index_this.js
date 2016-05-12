'use strict';

function doIt(a,b,c) {

	console.dir(this);
	console.log(a,b,c);
}

doIt();

var o = {
	id: 2,
	doIt: doIt
};

o.doIt();

var t = new doIt();

o.doIt.call({ id: 3 }, 1,2,3);
o.doIt.apply({ id: 4 }, [1,2,3]);

var fn = o.doIt.bind({ id: 5});

fn(5,6,7);
fn.call({ id: 6 });

console.log(doIt === o.doIt);
