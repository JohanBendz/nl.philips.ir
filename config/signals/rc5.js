'use strict';

module.exports = {
	carrier: 36000,
	dutyCycle: 33,
	manchesterUnit: 889,
	sensitivity: 0.4,
	sof: [1, 1, 0],
	toggleIndexes: [2],
	words: [
		[1, 0], // 0
		[0, 1], // 1
	],
	prefixData: [0, 0, 0],
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
		return `00000000${id.toString(2)}`
			.slice(-8)
			.split('')
			.map(Number);
	},
	cmds: {
		tv: {
			onoff: 12,
			power_on: 63,
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
			source: 56,
			volume_up: 16,
			volume_down: 17,
			mute: 13,
			channel_up: 32,
			channel_down: 33,
			tv: 0xC0 + 72,
			home: 82,
			rewind: 50,
			pause: 48,
			play: 53,
			stop: 54,
			fast_forward: 52,
			record: 55,
			next: 112,
			previous: 113,
			guide: 0xC0 + 44,
			back: 34,
			ok: 87,
			arrow_up: 80,
			arrow_down: 81,
			arrow_left: 85,
			arrow_right: 86,
			red: 107,
			green: 108,
			yellow: 109,
			blue: 110,
			text: 60,
			subtitle: 58,
			info: 15,
			picture_format: 126,
			ambilight: 71,
		},
	},
	interval: 89100,
	repetitions: 5,
	minimalLength: 8,
	maximalLength: 8,
};
