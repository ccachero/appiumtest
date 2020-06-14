const wdio = require('webdriverio');

class BaseSetup{

	initCapabilities(){
	const opts = {
    port: 4723,
    desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "Pixel 2 API 27",
    app: "./testing-challenge-android.apk",
    automationName: "UiAutomator2",
    appPackage: "org.goodwall.app",
    appWaitActivity: "org.goodwall.app.rx.domain.authenticator.activity.AuthenticatorActivity"}
		}; 

	return opts;
	}

	setupDriver(){
		return wdio.remote(this.initCapabilities());
	}

}

module.exports = { BaseSetup: BaseSetup };
