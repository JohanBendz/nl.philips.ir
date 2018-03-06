'use strict';

module.exports = {
	name: 'new_philips_remote',
	icon: './assets/new_remote/remote.svg',
	images: {
		small: './assets/new_remote/images/small.jpg',
		large: './assets/new_remote/images/large.jpg',
	},
	rf: {
		signal: 'rc6',
	},
	capabilities: ['onoff', 'volume_mute', 'volume_up', 'volume_down', 'channel_up', 'channel_down'],
	capabilityToCommandMap: {
		onoff: ['power_on', 'onoff'],
		volume_mute: 'mute',
		volume_up: 'volume_up',
		volume_down: 'volume_down',
		channel_up: 'channel_up',
		channel_down: 'channel_down',
	},
	minTxInterval: 250,
	cmdType: 'tv',
	pair: [
		{
			rf_template: 'check_device',
		},
		{
			rf_tempalte: 'done',
		},
	],
};
