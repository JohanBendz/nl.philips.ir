'use strict';

module.exports = {
	id: 'new_tv',
	name: 'new_philips_remote',
	icon: './assets/new_remote/remote.svg',
	images: {
		small: './assets/new_remote/images/small.jpg',
		large: './assets/new_remote/images/large.jpg',
	},
	class: 'tv',
	rf: {
		signal: 'rc6',
		minTxInterval: 250,
		cmdType: 'tv',
		capabilityToCommandMap: {
			onoff: {
				true: 'power_on',
				toggle: 'onoff',
			},
			volume_mute: {
				toggle: 'mute',
			},
			volume_up: 'volume_up',
			volume_down: 'volume_down',
			channel_up: 'channel_up',
			channel_down: 'channel_down',
		},
	},
	capabilities: ['onoff', 'volume_mute', 'volume_up', 'volume_down', 'channel_up', 'channel_down'],
	pair: [
		// {
		// 	rf_template: 'check_device',
		// },
		{
			rf_template: 'done',
		},
	],
};
