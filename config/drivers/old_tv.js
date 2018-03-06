'use strict';

const newTvConfig = require('./new_tv');

module.exports = Object.assign({}, newTvConfig, {
	name: 'old_philips_remote',
	icon: './assets/old_remote/remote.svg',
	images: {
		small: './assets/old_remote/images/small.jpg',
		large: './assets/old_remote/images/large.jpg',
	},
	rf: {
		signal: 'rc5',
	},
});
