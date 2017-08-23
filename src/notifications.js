import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Popover from 'react-popover'

const renderNotification = (e, i) => {
	// just changing color for different messages
	var headerClass = ['four', 'five'].includes(e) ? 'notification_header notification_header_smc' : 'notification_header';
	return (
		<li key={i} className="notification">
			<div className={headerClass}>
				Notification {e}
				<span className="vx_icon vx_icon-small vx_icon-close-small notification-dismiss"></span>
			</div>
			<div className="notification_description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</div>
			<a href="#" className="notification_link">click here</a>
		</li>
	);
};

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
		this.handleClick = this.handleClick.bind(this);
		this.closePopover = this.closePopover.bind(this);
	}
	handleClick (e) {
		this.setState({
			open: !this.state.open
		})
	}
	closePopover (e) {
		this.setState({
			open: false
		})
	}
	render() {
		return (
			<Popover isOpen={this.state.open}
				onOuterAction={this.closePopover}
				preferPlace={'below'}
				enterExitTransitionDurationMs={false}
				tipSize={10}
				body={
					<Tabs selectedTabClassName='selected-tab' selectedTabPanelClassName='selected-panel'>
						<TabList className='tab-list'>
							<Tab className='left-tab'>Notifications (3)</Tab>
							<Tab className='right-tab'>Messages (2)</Tab>
						</TabList>

						<TabPanel className='panel'>
							<ul>
								{ ['one', 'two', 'three'].map(renderNotification) }
							</ul>
						</TabPanel>
						<TabPanel className='panel'>
							<ul>
								{['four', 'five'].map(renderNotification)}
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