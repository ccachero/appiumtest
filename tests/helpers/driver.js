const BaseSetup = require('./BaseSetup.js').BaseSetup;

class Driver extends BaseSetup{
	constructor(){
	super();
	this.client = super.setupDriver(); }
}

module.exports = { Driver: Driver };