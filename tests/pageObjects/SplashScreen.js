const Resources = require('../resources/SplashScreenResources.js').SplashScreenResources;
var resources = new Resources();

class SplashScreen{

	//check if elements in the splash screen are visible
	splashScreenHasLoaded(){
		if(resources.loginButton().waitForVisible(10000) &&
		resources.signUpButtonFB().waitForVisible(10000) && resources.signUpButtonPhone().waitForVisible(10000)){
			return true;
		}
		else{
			return false;
		}
	}

	//click login to navigate to login page
	navigateToLogin(){
		resources.loginButton().click();
	}

	//click sign up button to sign up
	navigateToSignUp(){
		resources.signUpButton().click();
	}
}

module.exports = { SplashScreen: SplashScreen };