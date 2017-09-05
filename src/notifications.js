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
		return (
			<Popover isOpen={this.state.open}
				onOuterAction={this.closePopover}
				preferPlace={'below'}
				tipSize={10}
				body={
					<Tabs selectedTabClassName='selected-tab' selectedTabPanelClassName='selected-panel'>
						<TabList className='tab-list'>
							<Tab className='left-tab'>Notifications ({ getCount(this.state.notifications, "notification") })</Tab>
							<Tab className='right-tab'>Messages ({ getCount(this.state.notifications, "message") })</Tab>
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