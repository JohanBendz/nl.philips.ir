'use strict';
/* eslint-disable */
const config = {
	signal: 'RC5',
	images: {
		small: '../../ir_generator/assets/old_remote/images/small.jpg',
		large: '../../ir_generator/assets/old_remote/images/large.jpg'
	},
	pair: {
		viewOrder: ['generic_check_device', 'generic_done'],
		views: [{
			template: '../lib/pair/check_device.html',
			options: {
				title: 'views.generic_done.title',
				device_exists_message: 'views.generic_check_device.device_exists_message',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_check_device'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	id: 'old_tv',
	class: 'tv',
	capabilities: ['onoff',
		'volume_mute',
		'volume_up',
		'volume_down',
		'channel_up',
		'channel_down'
	],
	capabilityToCommandMap: {
		onoff: ['power_on', 'onoff'],
		volume_mute: 'mute',
		volume_up: 'volume_up',
		volume_down: 'volume_down',
		channel_up: 'channel_up',
		channel_down: 'channel_down'
	},
	minTxInterval: 250,
	cmdType: 'tv',
	triggers: [{
		id: 'old_tv:cmd_received',
		title: 'ir_generator.flow.cmd_received',
		args: [{
			name: 'cmd',
			type: 'autocomplete'
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=old_tv'
		}]
	}],
	actions: [{
		id: 'old_tv:send_cmd',
		title: 'ir_generator.flow.send_cmd',
		args: [{
			name: 'cmd',
			type: 'autocomplete'
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=old_tv'
		}]
	}, {
		id: 'old_tv:send_cmd_number',
		title: 'ir_generator.flow.send_cmd_number',
		args: [{
			name: 'number',
			type: 'number',
			min: '0',
			max: '9999'
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=old_tv'
		}]
	}],
	name: 'old_philips_remote',
	icon: '../../ir_generator/assets/old_remote/remote.svg',
	driver: '../lib/ir/driver',
	signalDefinition: {
		id: 'RC5',
		carrier: 36000,
		dutyCycle: 33,
		manchesterUnit: 889,
		sensitivity: 0.4,
		sof: [1, 1, 0],
		toggleIndexes: [2],
		words: [
			[1, 0],
			[0, 1]
		],
		prefixData: [0, 0, 0],
		parseCmd: undefined,
		cmds: ['tv$~onoff',
			'tv$~power_on',
			'tv$~number_1',
			'tv$~number_2',
			'tv$~number_3',
			'tv$~number_4',
			'tv$~number_5',
			'tv$~number_6',
			'tv$~number_7',
			'tv$~number_8',
			'tv$~number_9',
			'tv$~source',
			'tv$~volume_up',
			'tv$~volume_down',
			'tv$~mute',
			'tv$~channel_up',
			'tv$~channel_down',
			'tv$~tv',
			'tv$~home',
			'tv$~rewind',
			'tv$~pause',
			'tv$~play',
			'tv$~stop',
			'tv$~fast_forward',
			'tv$~record',
			'tv$~next',
			'tv$~previous',
			'tv$~guide',
			'tv$~back',
			'tv$~ok',
			'tv$~arrow_up',
			'tv$~arrow_down',
			'tv$~arrow_left',
			'tv$~arrow_right',
			'tv$~red',
			'tv$~green',
			'tv$~yellow',
			'tv$~blue',
			'tv$~text',
			'tv$~subtitle',
			'tv$~info',
			'tv$~picture_format',
			'tv$~ambilight'
		],
		interval: 30025,
		repetitions: 1,
		minimalLength: 8,
		maximalLength: 8
	}
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
