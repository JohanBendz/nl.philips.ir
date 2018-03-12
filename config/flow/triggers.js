'use strict';

module.exports = [
	{
		id: 'old_tv:cmd_received',
		title: {
			en: 'Button is Pressed',
			nl: 'Knop is Ingedrukt',
		},
		args: [
			{
				name: 'cmd',
				type: 'autocomplete',
			},
			{
				name: 'device',
				type: 'device',
				filter: 'driver_id=old_tv',
			},
		],
	},
	{
		id: 'new_tv:cmd_received',
		title: {
			en: 'Button is Pressed',
			nl: 'Knop is Ingedrukt',
		},
		args: [
			{
				name: 'cmd',
				type: 'autocomplete',
			},
			{
				name: 'device',
				type: 'device',
				filter: 'driver_id=new_tv',
			},
		],
	},
];
