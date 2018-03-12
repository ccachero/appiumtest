
class SplashScreen{
	get loginButton() { return browser.element('#login'); }
	get signUpButton() { return browser.element('#signUpButton'); }

	splashScreenHasLoaded(){
		if(this.loginButton.waitForVisible(10000) &&
		this.signUpButton.waitForVisible(10000)){
			return true;
		}
		else{
			return false;
		}
	}
	navigateToLogin(){
		this.loginButton.click();
	}
	navigateToSignUp(){
		this.signUpButton.click();
	}
}

module.exports = { SplashScreen: SplashScreen };