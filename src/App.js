import React, { Component } from 'react';
import Notifications from './notifications.js';
import './notifications.css';

const notifications = [
	{
		id: 1,
		type: "notification",
		hidden: false,
		header: "Notification 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
	},
	{
		id: 2,
		type: "notification",
		hidden: false,
		header: "Notification 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
	},
		{
		id: 3,
		type: "notification",
		hidden: false,
		header: "Notification 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
	},
	{
		id: 4,
		type: "message",
		hidden: false,
		header: "Notification 4",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
	},
	{
		id: 5,
		type: "message",
		hidden: false,
		header: "Notification 5",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
	}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header">
					<h2>react-notifications</h2>
				</div>
				<p className="App-intro">
					<Notifications
						open={true}
						notifications={notifications} />
				</p>
			</div>
		);
	}
}

export default App;
