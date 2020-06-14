const Resources = require('../resources/LoginScreenResources.js').LoginScreenResources;
var resources = new Resources();

class LoginScreen{

    login(username, password){
    	if(this.loginScreenHasLoaded()){
    	resources.emailOrPhoneTextField().setValue(username);
    	resources.passwordTextField().setValue(password);
   		resources.loginButton().click();}
    }

    //check if elements on the login screen are visible
    loginScreenHasLoaded(){
    	if(resources.emailOrPhoneTextField().waitForVisible(10000) &&
    	resources.passwordTextField().waitForVisible(10000) &&
    	resources.loginButton().waitForVisible(10000)){
            return true;
        }
        else{
            return false;
        }
    }

    finishLogIn(){
        //workaround because after logging in and going to the home screen, appium can't detect any elements
        //until the user clicks/taps something on the screen
        if(resources.loginButton().waitForVisible(30000, true)){
            setTimeout(function(){ 
                browser.touchAction({
                action: 'tap', x: 700, y:500
                })
            }, 5000);
            return true;
         }
    }
}

module.exports = { LoginScreen: LoginScreen };