import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
	<div>
		<Notifications
			open={true}
			notifications={notifications} />
	</div>,
	document.getElementById('root')
);
