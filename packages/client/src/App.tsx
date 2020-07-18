import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './pages/TodoList';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					{/* TODO::071520 private route */}
					<TodoList />
				</Route>
			</Switch>
		</Router>
	);
}