import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				Hello world
			</div>
		);
	}
}


ReactDOM.render(
	<Main />,
	document.getElementById('main_app')
);
