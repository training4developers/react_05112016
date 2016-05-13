import React from 'react';

class BaseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
}

export default class ColorForm extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			newColor: ''
		};
		this.addColor = this.addColor.bind(this);
	}

	addColor() {
		this.props.addColor(this.state.newColor);
		this.setState({
			newColor: ''
		});
	}

	render() {
		return <form>
				<div>
					<label>
						New Color
						<input value={this.state.newColor} name='newColor' onChange={this.onChange} type='text' />
					</label>
				</div>
				<button type='button' onClick={this.addColor}>Add Color</button>
			</form>;
	}

}
