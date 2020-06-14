const Common = require('../helpers/Common.js').Common;
var common = new Common();

class SplashScreenResources{

	loginButton() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/welcome_btn_login")');
		 }

	signUpButtonFB() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/welcome_btn_continue_fb")');
	}

	signUpButtonPhone() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/welcome_btn_continue_phone")');
	}

}

module.exports = { SplashScreenResources: SplashScreenResources };