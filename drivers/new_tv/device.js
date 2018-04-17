'use strict';

const PhilipsDevice = require('../../lib/PhilipsDevice');

module.exports = RFDevice => class MyDevice extends PhilipsDevice(RFDevice) {

};
