import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: props.items.concat(),
			newColor: ''
		};

		this.onChange = this.onChange.bind(this);
		this.addColor = this.addColor.bind(this);
	}

	addColor() {
		this.setState({
			items: this.state.items.concat(this.state.newColor),
			newColor: ''
		});
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	render() {

		return <div>
			<h1>{this.props.greeting}</h1>
			<ul>
				{this.state.items.map(item => <li key={item}>{item}</li>)}
			</ul>

			<form>
				<div>
					<label>
						New Color
						<input value={this.state.newColor} name='newColor' onChange={this.onChange} type='text' />
					</label>
				</div>
				<button type='button' onClick={this.addColor}>Add Color</button>
			</form>
		</div>;
	}

}

let colors = ['hot pink','baby blue','fuchsia'];

ReactDOM.render(<HelloWorld items={colors} greeting='Class Favorite Colors!' />, document.querySelector('main'));
