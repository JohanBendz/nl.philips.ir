'use strict';

const Homey = require('homey');
const util = require('homey-rfdriver').util;

module.exports = RFDevice => class PhilipsDevice extends RFDevice {

	onInit() {
		super.onInit();

		if (this.isPairInstance) {
			this.setDeviceState({ data: { id: this.getDriver().id } });
		}
	}

	assembleDeviceObject() {
		const deviceObject = super.assembleDeviceObject();
		if (!deviceObject) return deviceObject;

		deviceObject.name = Homey.__(`device.name.${this.id}`);
		return deviceObject;
	}
};
