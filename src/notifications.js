import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Popover from 'react-popover'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			notifications: [
				{
					id: 1,
					hidden: false,
					header: "Notification 1",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
				},
				{
					id: 2,
					hidden: false,
					header: "Notification 2",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
				},
				{
					id: 3,
					hidden: false,
					header: "Notification 3",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
				}
			],
			messages: [
				{
					id: 4,
					hidden: false,
					header: "Notification 4",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
				},
				{
					id: 5,
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
				if (prevState.notifications[i].id === id) {
					prevState.notifications[i].hidden = true;
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
	renderNotification({id, hidden, header, description}) {
		var headerClass = 'notification_header';
		return (
			hidden ? null :
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
									transitionEnter={false}
									transitionLeave={true}
									transitionLeaveTimeout={300}>
									{ this.state.notifications.map(this.renderNotification) }
								</ReactCSSTransitionGroup>
							</ul>
						</TabPanel>
						<TabPanel className='panel'>
							<ul>
								<ReactCSSTransitionGroup
									transitionName="notification"
									transitionAppear={false}
									transitionEnter={false}
									transitionLeave={true}
									transitionLeaveTimeout={300}>
									{ this.state.messages.map(this.renderNotification) }
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