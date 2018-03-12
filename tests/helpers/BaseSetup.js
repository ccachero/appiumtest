const wdio = require('webdriverio');

class BaseSetup{

	initCapabilities(){
	const opts = {
    port: 4723,
    desiredCapabilities: {
    platformName: "Android",
    platformVersion: "7.1.1",
    deviceName: "Test Device",
    app: "../../Freelancer.apk",
    automationName: "UiAutomator2",
    appPackage: "com.freelancer.android.messenger",
    appWaitActivity: "com.freelancer.android.auth.AuthActivity"}
		}; 

	return opts;
	}

	setupDriver(){
		return wdio.remote(this.initCapabilities());
	}

}

module.exports = { BaseSetup: BaseSetup };
