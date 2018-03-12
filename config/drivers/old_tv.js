'use strict';

const newTvConfig = require('./new_tv');

module.exports = Object.assign({}, newTvConfig, {
	id: 'old_tv',
	name: 'old_philips_remote',
	icon: './assets/old_remote/remote.svg',
	images: {
		small: './assets/old_remote/images/small.jpg',
		large: './assets/old_remote/images/large.jpg',
	},
	rf: Object.assign({}, newTvConfig.rf, {
		signal: 'rc5',
	}),
});
