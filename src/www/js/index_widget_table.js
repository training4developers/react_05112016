import React from 'react';
import ReactDOM from 'react-dom';
// import WidgetTable from './components/widget-table';
//
// let widgets = [
// 	{ id: 1, name: 'Widget 1', color:'blue', size:'large', quantity:2 },
// 	{ id: 2, name: 'Widget 2', color:'red', size:'medium', quantity:5 }
// ];
//
// ReactDOM.render(<WidgetTable widgets={widgets} />, document.querySelector('main'));
// //
class HelloWorld extends React.Component {

	static get propTypes() {
		return {
			subTitle: React.PropTypes.string.isRequired,
			colors: React.PropTypes.array
		};
	}

	render() {

		//return React.createElement('header', null,
		//	React.createElement('h1', null, 'Hello World!'));

		return <div>
			<header>
				<h1>Hello World!</h1>
				<h2>{this.props.subTitle}</h2>
			</header>
			<ul>
				{this.props.colors.map(function(color) {
					return <li key={color}>{color}</li>;
				})}
			</ul>
		</div>;
	}

}
//
//
//
//
// //ReactDOM.render(React.createElement(HelloWorld), document.querySelector('main'));
//
let colors = ['red','blue','green'];
//
ReactDOM.render(<HelloWorld colors={colors} />, document.querySelector('main'));
