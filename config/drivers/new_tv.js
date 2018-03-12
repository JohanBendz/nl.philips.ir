'use strict';

module.exports = {
	id: 'new_tv',
	name: {
		en: 'Philips TV Remote (New Models Only)',
		nl: 'Philips TV Afstandsbediening (Nieuwe Modellen)',
	},
	icon: './drivers/new_tv/assets/icon.svg',
	images: {
		small: './drivers/new_tv/assets/images/small.jpg',
		large: './drivers/new_tv/assets/images/large.jpg',
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
