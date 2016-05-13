import React from 'react';


export const ColorList = (props) => {

	return <ul>
		{props.items.map(item => <li key={item}>{item}</li>)}
	</ul>;

};
