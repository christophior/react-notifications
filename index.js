'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTabs = require('react-tabs');

var _reactPopover = require('react-popover');

var _reactPopover2 = _interopRequireDefault(_reactPopover);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var allHidden = function allHidden(notifications, notificationType) {
	notifications.forEach(function (n) {
		if (n && n.type === notificationType) {
			return false;
		}
	});
	return true;
};

var getCount = function getCount(notifications, notificationType) {
	var count = 0;
	notifications.forEach(function (n) {
		if (n && n.type === notificationType) {
			count += 1;
		}
	});
	return count;
};

var Notifications = function (_Component) {
	_inherits(Notifications, _Component);

	function Notifications(props) {
		_classCallCheck(this, Notifications);

		var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this, props));

		_this.state = {
			open: true,
			notifications: [{
				id: 1,
				type: "notification",
				hidden: false,
				header: "Notification 1",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
			}, {
				id: 2,
				type: "notification",
				hidden: false,
				header: "Notification 2",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
			}, {
				id: 3,
				type: "notification",
				hidden: false,
				header: "Notification 3",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
			}, {
				id: 4,
				type: "message",
				hidden: false,
				header: "Notification 4",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
			}, {
				id: 5,
				type: "message",
				hidden: false,
				header: "Notification 5",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
			}]
		};
		_this.handleClick = _this.handleClick.bind(_this);
		_this.dismissNotification = _this.dismissNotification.bind(_this);
		_this.closePopover = _this.closePopover.bind(_this);
		_this.renderNotification = _this.renderNotification.bind(_this);
		_this.renderEmptyMessage = _this.renderEmptyMessage.bind(_this);
		return _this;
	}

	_createClass(Notifications, [{
		key: 'handleClick',
		value: function handleClick(e) {
			this.setState({
				open: !this.state.open
			});
		}
	}, {
		key: 'dismissNotification',
		value: function dismissNotification(id) {
			this.setState(function (prevState) {
				console.log(prevState);
				for (var i = 0; i < prevState.notifications.length; i++) {
					if (prevState.notifications[i] && prevState.notifications[i].id === id) {
						delete prevState.notifications[i];
						return prevState;
					}
				}
				return prevState;
			});
		}
	}, {
		key: 'closePopover',
		value: function closePopover(e) {
			this.setState({
				open: false
			});
		}
	}, {
		key: 'renderNotification',
		value: function renderNotification(_ref, typeToRender) {
			var _this2 = this;

			var id = _ref.id,
			    type = _ref.type,
			    hidden = _ref.hidden,
			    header = _ref.header,
			    description = _ref.description;

			var headerClass = 'notification_header';
			return hidden || type !== typeToRender ? null : _react2.default.createElement(
				'li',
				{ key: id, className: 'notification' },
				_react2.default.createElement(
					'div',
					{ className: headerClass },
					header,
					_react2.default.createElement('span', { className: 'vx_icon vx_icon-small vx_icon-close-small notification-dismiss', onClick: function onClick() {
							return _this2.dismissNotification(id);
						} })
				),
				_react2.default.createElement(
					'div',
					{ className: 'notification_description' },
					description
				),
				_react2.default.createElement(
					'a',
					{ href: '#', className: 'notification_link' },
					'click here'
				)
			);
		}
	}, {
		key: 'renderEmptyMessage',
		value: function renderEmptyMessage(message) {
			return _react2.default.createElement(
				'li',
				{ className: 'notification' },
				_react2.default.createElement(
					'div',
					{ className: 'notification_empty_header' },
					message
				),
				_react2.default.createElement(
					'div',
					{ className: 'notification_empty_description' },
					'But check out some handy tips and tricks below.'
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				_reactPopover2.default,
				{ isOpen: this.state.open,
					onOuterAction: this.closePopover,
					preferPlace: 'below',
					tipSize: 10,
					body: _react2.default.createElement(
						_reactTabs.Tabs,
						{ selectedTabClassName: 'selected-tab', selectedTabPanelClassName: 'selected-panel' },
						_react2.default.createElement(
							_reactTabs.TabList,
							{ className: 'tab-list' },
							_react2.default.createElement(
								_reactTabs.Tab,
								{ className: 'left-tab' },
								'Notifications (',
								getCount(this.state.notifications, "notification"),
								')'
							),
							_react2.default.createElement(
								_reactTabs.Tab,
								{ className: 'right-tab' },
								'Messages (',
								getCount(this.state.notifications, "message"),
								')'
							)
						),
						_react2.default.createElement(
							_reactTabs.TabPanel,
							{ className: 'panel' },
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									_reactAddonsCssTransitionGroup2.default,
									{
										transitionName: 'notification',
										transitionAppear: false,
										transitionEnterTimeout: 300,
										transitionLeaveTimeout: 300 },
									this.state.notifications.every(function (e) {
										return e === undefined || e.type === "message";
									}) ? this.renderEmptyMessage("You don't have any new notifications") : this.state.notifications.map(function (n) {
										return _this3.renderNotification(n, "notification");
									})
								)
							)
						),
						_react2.default.createElement(
							_reactTabs.TabPanel,
							{ className: 'panel' },
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									_reactAddonsCssTransitionGroup2.default,
									{
										transitionName: 'notification',
										transitionAppear: false,
										transitionEnterTimeout: 300,
										transitionLeaveTimeout: 300 },
									this.state.notifications.every(function (e) {
										return e === undefined || e.type === "notification";
									}) ? this.renderEmptyMessage("You don't have any new secure messages") : this.state.notifications.map(function (n) {
										return _this3.renderNotification(n, "message");
									})
								)
							)
						)
					) },
				_react2.default.createElement(
					'button',
					{ className: 'btn-primary', onClick: this.handleClick },
					'click'
				)
			);
		}
	}]);

	return Notifications;
}(_react.Component);

exports.default = Notifications;
