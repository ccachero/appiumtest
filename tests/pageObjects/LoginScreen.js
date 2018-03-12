
class LoginScreen{
	get continueWithEmail() { return browser.element('#continueButton'); }
	get usernameTextField() { return browser.element('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.EditText'); }
	get passwordTextField() { return browser.element('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.EditText'); }
    get loginButton() { return browser.element('#getStartedButton'); }

    login(username, password){
    	this.continueWithEmail.click();
    	if(this.loginScreenHasLoaded()){
    	this.usernameTextField.setValue(username);
    	this.passwordTextField.setValue(password);
   		this.loginButton.click();}
    }

    loginScreenHasLoaded(){
    	this.usernameTextField.waitForVisible(10000);
    	this.passwordTextField.waitForVisible(10000);
    	this.loginButton.waitForVisible(10000);

    	return true;
    }
}

module.exports = { LoginScreen: LoginScreen };