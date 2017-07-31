'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		old_tv: {
			signal: 'RC5',
			images: {
				small: '../ir_generator/assets/old_remote/images/small.jpg',
				large: '../ir_generator/assets/old_remote/images/large.jpg'
			},
			pair: {
				viewOrder: ['generic_check_device', 'generic_done'],
				views: [{
					template: './lib/pair/check_device.html',
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
					template: './lib/pair/done.html',
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
			icon: '../ir_generator/assets/old_remote/remote.svg',
			driver: './lib/ir/driver',
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
		},
		new_tv: {
			signal: 'RC6',
			images: {
				small: '../ir_generator/assets/new_remote/images/small.jpg',
				large: '../ir_generator/assets/new_remote/images/large.jpg'
			},
			pair: {
				viewOrder: ['generic_check_device', 'generic_done'],
				views: [{
					template: './lib/pair/check_device.html',
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
					template: './lib/pair/done.html',
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
			id: 'new_tv',
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
				id: 'new_tv:cmd_received',
				title: 'ir_generator.flow.cmd_received',
				args: [{
					name: 'cmd',
					type: 'autocomplete'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=new_tv'
				}]
			}],
			actions: [{
				id: 'new_tv:send_cmd',
				title: 'ir_generator.flow.send_cmd',
				args: [{
					name: 'cmd',
					type: 'autocomplete'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=new_tv'
				}]
			}, {
				id: 'new_tv:send_cmd_number',
				title: 'ir_generator.flow.send_cmd_number',
				args: [{
					name: 'number',
					type: 'number',
					min: '0',
					max: '9999'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=new_tv'
				}]
			}],
			name: 'new_philips_remote',
			icon: '../ir_generator/assets/new_remote/remote.svg',
			driver: './lib/ir/driver',
			signalDefinition: {
				id: 'RC6',
				carrier: 36000,
				dutyCycle: 50,
				manchesterUnit: 444,
				sensitivity: 0.4,
				sof: [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
				toggleIndexes: [16, 17, 18, 19],
				words: [
					[0, 1],
					[1, 0]
				],
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
					'tv$~dot',
					'tv$~source',
					'tv$~volume_up',
					'tv$~volume_down',
					'tv$~mute',
					'tv$~channel_up',
					'tv$~channel_down',
					'tv$~brightness_up',
					'tv$~brightness_down',
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
					'tv$~list',
					'tv$~red',
					'tv$~green',
					'tv$~yellow',
					'tv$~blue',
					'tv$~option',
					'tv$~options',
					'tv$~text',
					'tv$~subtitle',
					'tv$~closed_captioning',
					'tv$~info',
					'tv$~picture_format',
					'tv$~ambilight',
					'tv$~ambilight_mode',
					'tv$~multiview',
					'tv$~search',
					'tv$~picture_style',
					'tv$~2d',
					'tv$~3d',
					'tv$~3d_format',
					'tv$~3d_depth',
					'tv$~audio_style',
					'tv$~surround_mode',
					'tv$~headphone_volume',
					'tv$~2_player_gaming',
					'tv$~setup',
					'tv$~network',
					'tv$~hdmi_2',
					'tv$~scart',
					'tv$~hdmi_1',
					'tv$~netflix'
				],
				interval: 30025,
				repetitions: 1,
				minimalLength: 16,
				maximalLength: 16
			}
		}
	}
};
