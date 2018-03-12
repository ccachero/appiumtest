
class WelcomeScreen{
	get welcomeScreenLogo() { return browser.element('#imageView'); }
	get welcomeMessage() { return browser.element('#title'); }
	get skipButton() { return browser.element('#skipButton'); }

	welcomeScreenHasLoaded(){
		if(this.welcomeScreenLogo.waitForVisible(10000) &&
		this.welcomeMessage.waitForVisible(10000) &&
		this.skipButton.waitForVisible(10000)){
		return true;
		}
		else{
			return false;
		}
	}
	navigateToHome(){
		this.skipButton.click();
	}
}

module.exports = { WelcomeScreen: WelcomeScreen };