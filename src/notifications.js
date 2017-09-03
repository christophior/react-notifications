import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Popover from 'react-popover'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const allHidden = (notifications, notificationType) => {
	notifications.forEach((n) => {
		if (n && n.type === notificationType) {
			return false;
		}
	});
	return true;
};


class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			notifications: [
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
			]
		};
		this.handleClick = this.handleClick.bind(this);
		this.dismissNotification = this.dismissNotification.bind(this);
		this.closePopover = this.closePopover.bind(this);
		this.renderNotification = this.renderNotification.bind(this);
		this.renderEmptyMessage = this.renderEmptyMessage.bind(this);
	}
	handleClick (e) {
		this.setState({
			open: !this.state.open
		})
	}
	dismissNotification(id) {
		this.setState((prevState) => {
			console.log(prevState);
			for (var i = 0; i<prevState.notifications.length; i++) {
				if (prevState.notifications[i] && prevState.notifications[i].id === id) {
					delete prevState.notifications[i];
					return prevState;
				}
			}
			return prevState;
		});
	}
	closePopover (e) {
		this.setState({
			open: false
		})
	}
	renderNotification({id, type, hidden, header, description}, typeToRender) {
		var headerClass = 'notification_header';
		return (
			hidden || type !== typeToRender ? null :
			<li key={id} className="notification">
				<div className={headerClass}>
					{header}
					<span className="vx_icon vx_icon-small vx_icon-close-small notification-dismiss" onClick={() => this.dismissNotification(id)}></span>
				</div>
				<div className="notification_description">
					{description}
				</div>
				<a href="#" className="notification_link">click here</a>
			</li>
		);
	}
	renderEmptyMessage(message) {
		return (
			<li className="notification">
				<div className="notification_empty_header">
					{ message }
				</div>
				<div className="notification_empty_description">
					But check out some handy tips and tricks below.
				</div>
			</li>
		);
	}
	render() {
		return (
			<Popover isOpen={this.state.open}
				onOuterAction={this.closePopover}
				preferPlace={'below'}
				tipSize={10}
				body={
					<Tabs selectedTabClassName='selected-tab' selectedTabPanelClassName='selected-panel'>
						<TabList className='tab-list'>
							<Tab className='left-tab'>Notifications (3)</Tab>
							<Tab className='right-tab'>Messages (2)</Tab>
						</TabList>

						<TabPanel className='panel'>
							<ul>
								<ReactCSSTransitionGroup
									transitionName="notification"
									transitionAppear={false}
									transitionEnterTimeout={300}
									transitionLeaveTimeout={300}>
									{
										this.state.notifications.every(e => e === undefined || e.type === "message") ?
										this.renderEmptyMessage("You don't have any new notifications") :
										this.state.notifications.map(n => this.renderNotification(n, "notification"))
									}
								</ReactCSSTransitionGroup>
							</ul>
						</TabPanel>
						<TabPanel className='panel'>
							<ul>
								<ReactCSSTransitionGroup
									transitionName="notification"
									transitionAppear={false}
									transitionEnterTimeout={300}
									transitionLeaveTimeout={300}>
									{
										this.state.notifications.every(e => e === undefined || e.type === "notification") ?
										this.renderEmptyMessage("You don't have any new secure messages") :
										this.state.notifications.map(n => this.renderNotification(n, "message"))
									}
								</ReactCSSTransitionGroup>
							</ul>
						</TabPanel>
					</Tabs>
				}>
				<button className='btn-primary' onClick={this.handleClick}>click</button>
			</Popover>
		);
	}
}

export default Notifications;