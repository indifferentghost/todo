import React from 'react';
import { render } from 'react-dom';

function App() {
	return (
		<div>hello world</div>
	);
}

const div = document.createElement('div');
document.body.appendChild(div);

render(<App />, div);