import React from 'react';
import ReactDOM from 'react-dom';

import ColorForm from './components/color-form';
import { ColorList } from './components/color-list';

let person = {
	firstName: "Bob",
	lastName: "Martin"
};

let { firstName: fn, lastName: ln } = person;

//console.log(fn);
//console.log(ln);

function doIt({ firstName: f }) {
	console.log(f);
}

doIt(person)



console.dir(ColorList);

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: props.items.concat(),
			newColor: ''
		};

		this.addColor = this.addColor.bind(this);
	}

	addColor(newColor) {
		this.setState({
			items: this.state.items.concat(newColor)
		});
	}

	render() {

		return <div>
			<h1>{this.props.greeting}</h1>
			<ColorList items={this.state.items} />
			<ColorForm addColor={this.addColor} />
		</div>;
	}

}

let colors = ['hot pink','baby blue','fuchsia'];

ReactDOM.render(<HelloWorld items={colors} greeting='Class Favorite Colors!' />, document.querySelector('main'));
