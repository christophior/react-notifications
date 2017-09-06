import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Popover from 'react-popover'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const getCount = (notifications, notificationType) => {
	let count = 0;
	notifications.forEach((n) => {
		if (n && n.type === notificationType) {
			count += 1;
		}
	});
	return count;
};

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: props.open,
			notifications: props.notifications
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
	renderNotification({id, type, header, description}, typeToRender) {
		return (
			type !== typeToRender ? null :
			<li key={id} className="notification">
				<div className="notification_header">
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
		let notificationCount = getCount(this.state.notifications, "notification"),
			messageCount = getCount(this.state.notifications, "message"),
			count = notificationCount + messageCount;
		return (
			<Popover
				isOpen={this.state.open}
				onOuterAction={this.closePopover}
				enterExitTransitionDurationMs={false}
				preferPlace={'below'}
				tipSize={10}
				body={
					<Tabs selectedTabClassName='selected-tab' selectedTabPanelClassName='selected-panel'>
						<TabList className='tab-list'>
							<Tab className='left-tab'>Notifications ({ notificationCount })</Tab>
							<Tab className='right-tab'>Messages ({ messageCount })</Tab>
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
				<div onClick={this.handleClick} className="notificationHook vx_globalNav-svgIcon vx_globalNav-link_notifications vx_isCritical">
					<svg width="23px" height="26px" viewBox="-4 4 23 26" version="1.1" xmlns="http://www.w3.org/2000/svg" 	xmlnsXlink="http://www.w3.org/1999/xlink">
						<path fill="#FFFFFF" d="M9.9,26.9c1,0,2.9-0.1,5.8-0.3c1-0.1,1.7-0.2,2.1-0.5c0.3-0.3,0.4-0.7,0.3-1.3c-0.2-0.6-0.5-1.4-1-2.3 c-0.3-0.6-0.6-1.6-1-2.9c-0.3-1.3-0.5-2.6-0.5-3.8c0-2.6-0.5-4.7-1.6-6.3S11.5,7,9.8,7c0-1.4-0.8-2.1-2.4-2.1c-0.2,0-0.5,0.1-1,0.2 C5.6,5.3,5.2,6,5.2,7C3.5,7,2.2,7.8,1.1,9.3s-1.6,3.7-1.6,6.3c0,1.3-0.2,2.5-0.5,3.8c-0.3,1.3-0.7,2.2-1,2.9 c-0.3,0.6-0.5,1.1-0.7,1.4c-0.5,1.2-0.6,1.9-0.2,2.2c0.4,0.3,1.2,0.5,2.5,0.6s3,0.2,5,0.3c0.1,0.7,0.4,1.2,0.9,1.6c0.5,0.4,1.1,0.7,1.7,0.7S8.6,29,9,28.5C9.5,28.1,9.8,27.5,9.9,26.9z"/>
					</svg>
					<span className='vx_notificationCount'>{count}</span>
				</div>
			</Popover>
		);
	}
}

export default Notifications;