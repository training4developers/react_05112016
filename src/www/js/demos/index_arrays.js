

var colors = ['red','yellow']; //,'blue','gold','green','white','saffron'];

colors.push('black');
colors.push(true);
colors.push(42);
colors.push({
	country: {
		name: 'Romania',
		capital: 'Bucharest'
	}
});

colors[34000] = 'orange';

colors.chicken = 'Niket\'s favorite food';

var colors2 = {};
colors2[4] = "This is fun!";
colors2.length = 5;

console.dir(colors);
console.dir(colors2);
