import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Popover from 'react-popover'

const renderLi = (e, i) => {
	return <li key={i}>notification {e}</li>
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
								{ ['one', 'two', 'three'].map(renderLi) }
							</ul>
						</TabPanel>
						<TabPanel className='panel'>
							<ul>
								{['four', 'five'].map(renderLi)}
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