'use strict';

const Homey = require('homey');
const util = require('homey-rfdriver').util;

module.exports = RFDevice => class MyDevice extends RFDevice {

	onInit() {
		super.onInit();

		if (this.isPairInstance) {
			this.setDeviceState({ data: { id: this.getDriver().id } });
		}
	}
};
