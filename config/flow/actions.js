'use strict';

module.exports = [
	{
		id: 'old_tv:send_cmd',
		title: {
			en: 'Send Command',
			nl: 'Verzend Commando',
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
		id: 'old_tv:send_cmd_number',
		title: {
			en: 'Set Channel',
			nl: 'Zet op Kanaal',
		},
		args: [
			{
				name: 'number',
				type: 'number',
				min: 0,
				max: 9999,
			},
			{
				name: 'device',
				type: 'device',
				filter: 'driver_id=old_tv',
			},
		],
	},
	{
		id: 'new_tv:send_cmd',
		title: {
			en: 'Send Command',
			nl: 'Verzend Commando',
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
	{
		id: 'new_tv:send_cmd_number',
		title: {
			en: 'Set Channel',
			nl: 'Zet op Kanaal',
		},
		args: [
			{
				name: 'number',
				type: 'number',
				min: 0,
				max: 9999,
			},
			{
				name: 'device',
				type: 'device',
				filter: 'driver_id=new_tv',
			},
		],
	},
];
