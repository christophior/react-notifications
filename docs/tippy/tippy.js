(function(){
	var notificationBody = document.getElementById('notificationBody'),
		notificationBtn = document.querySelector('.notificationBtn');
	
	// adds all events to the notification body when it's copied over into the popover
	// events for switching tabs and dismissing notifications
	const updateEvents = function () {
		var popoverContent = document.querySelector('.tippy-tooltip-content'),
			leftTab = popoverContent.querySelector('#left-tab'),
			rightTab = popoverContent.querySelector('#right-tab'),
			dismissNotifications = popoverContent.querySelectorAll('.notification-dismiss');

		leftTab.addEventListener('click', onTabClick, false);
		rightTab.addEventListener('click', onTabClick, false);

		for (var i=0; i < dismissNotifications.length; i++){
	  		dismissNotifications[i].addEventListener('click', onDismiss, false);
		}
	};

	// init the popover with all our options
	// https://atomiks.github.io/tippyjs/#all-settings 
	const tip = tippy('.notificationBtn', {
		html: 'notificationBody',
		position: 'bottom',
		trigger: 'click',
		interactive: true,
		arrow: true,
		arrowSize: 'big',
		zIndex: 1200,
		animation: 'fade',
		duration: 100,
		onShown: updateEvents,
		popperOptions: {
			onUpdate: function (data) {
				console.log(data);
			}
		}
	});

	// update popove whenever any changes happen, changes are picked up and 
	// events are reinitialized 
	function updatePopover () {
		var popper = tip.getPopperElement(notificationBtn);
		tip.update(popper);
		updateEvents();
	}

	// handler for when a notification is dismissed
	function onDismiss(event) {
		event.stopPropagation();

		var notificationEl = notificationBody.querySelector('#notification' + event.target.dataset.id);
		notificationEl.classList.add('hidden');

		var selectedPanelEl = notificationBody.querySelector('.selected-panel')
			allNotifications = selectedPanelEl.querySelectorAll('.notification'),
			allHidden = true;

		console.log(allNotifications);

		for (var i=0; i < allNotifications.length; i++){
	  		allHidden = allHidden && allNotifications[i].classList.contains('hidden');
		}

		if (allHidden) {
			console.log('all hidden');
			selectedPanelEl.querySelector('#emptyNotification').classList.remove('hidden');
		}
		updatePopover();
	}

	// handler for when a tab is clicked
	function onTabClick(event){
		event.stopPropagation();

		var selectedTabs = notificationBody.querySelectorAll('.selected-tab');
		// deactivate existing active tab and panel
		for (var i=0; i < selectedTabs.length; i++){
	  		selectedTabs[i].classList.remove('selected-tab');
		}

		// activate new tab and panel
		var tab = notificationBody.querySelector('#' + event.target.id),
			panelId = tab.dataset.panel;

		tab.classList.add('selected-tab');

		var selectedPanels = notificationBody.querySelectorAll('.selected-panel');
		// deactivate existing active tab and panel
		for (var i=0; i < selectedPanels.length; i++){
	  		selectedPanels[i].classList.remove('selected-panel');
		}

		notificationBody.querySelector(panelId).classList.add('selected-panel');
		updatePopover();
	}	
})();