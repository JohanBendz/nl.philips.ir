'use strict';

module.exports = {
	carrier: 36000,
	dutyCycle: 50,
	manchesterUnit: 444,
	sensitivity: 0.4,
	//              ===start bit 1===  sb2  ====mode0====  =toggle=
	sof: [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
	toggleIndexes: [16, 17, 18, 19],
	words: [
		[0, 1], // 0
		[1, 0], // 1
	],
	// packing: true,
	// parseCmd: id => {
	// 	if (Array.isArray(id)) {
	// 		return id;
	// 	} else {
	// 		const str = `000${id.toString(16)}`;
	// 		return [parseInt(str.slice(-4, -2), 16), parseInt(str.slice(-2), 16)];
	// 	}
	// },
	parseCmd: id => {
		if (Array.isArray(id)) {
			return id;
		}
		return `0000000000000000${id.toString(2)}`
			.slice(-16)
			.split('')
			.map(Number);
	},
	cmds: {
		tv: {
			onoff: 12,
			power_on: 76,
			number_0: 0,
			number_1: 1,
			number_2: 2,
			number_3: 3,
			number_4: 4,
			number_5: 5,
			number_6: 6,
			number_7: 7,
			number_8: 8,
			number_9: 9,
			dot: 217,
			source: 56,
			volume_up: 16,
			volume_down: 17,
			mute: 13,
			channel_up: 32,
			channel_down: 33,
			brightness_up: 18,
			brightness_down: 19,
			tv: 159,
			home: 84,
			rewind: 43,
			pause: 48,
			play: 44,
			stop: 49,
			fast_forward: 40,
			record: 55,
			next: 76,
			previous: 77,
			guide: 204,
			back: 34,
			ok: 92,
			arrow_up: 88,
			arrow_down: 89,
			arrow_left: 90,
			arrow_right: 91,
			list: 210,
			red: 109,
			green: 110,
			yellow: 111,
			blue: 112,
			option: 204,
			options: 64,
			text: 60,
			subtitle: 75,
			closed_captioning: 70,
			info: 15,
			picture_format: 245,
			ambilight: 143,
			ambilight_mode: 144,
			multiview: 93,
			search: 180,
			picture_style: 243,
			'2d': 0x300 + 20,
			'3d': 0x300 + 21,
			'3d_format': 245,
			'3d_depth': 108,
			audio_style: 244,
			surround_mode: 79,
			headphone_volume: 147,
			'2_player_gaming': 179,
			setup: 191,
			network: 0x300 + 4,
			hdmi_2: 57,
			scart: 0x300 + 56,
			hdmi_1: 136,
			netflix: 108,
		},
	},
	interval: 83000,
	repetitions: 5,
	minimalLength: 16,
	maximalLength: 16,
};
