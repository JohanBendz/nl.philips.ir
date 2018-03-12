'use strict';

const newTvConfig = require('./new_tv');

module.exports = Object.assign({}, newTvConfig, {
	id: 'old_tv',
	name: {
		en: 'Philips TV Remote',
		nl: 'Philips TV Afstandsbediening',
	},
	icon: './drivers/old_tv/assets/icon.svg',
	images: {
		small: './drivers/old_tv/assets/images/small.jpg',
		large: './drivers/old_tv/assets/images/large.jpg',
	},
	rf: Object.assign({}, newTvConfig.rf, {
		signal: 'rc5',
	}),
});
