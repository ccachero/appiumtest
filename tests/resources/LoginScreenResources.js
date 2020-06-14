const Common = require('../helpers/Common.js').Common;
var common = new Common();

class LoginScreenResources{
	
	emailOrPhoneTextField() { 
        return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/login_et_email_phone")');
        }
	passwordTextField() { 
        return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/login_et_password")');
    }
    loginButton() { 
        return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/login_btn")');
     }
     loginButtonLoading() { 
        return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/login_btn").text("Connecting…")');
     }
     goodwallLoadScreen(){
        return common.getUISelector('new UiSelector().className("android.widget.FrameLayout")');
     }
 }

 module.exports = { LoginScreenResources: LoginScreenResources };