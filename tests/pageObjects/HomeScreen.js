
class HomeScreen{
	get denyPermission() { return browser.element('#permission_deny_button'); }
	get homeToolBar() { return browser.element('#toolbar'); }
	get bottomNav() { return browser.element('#bottomNavigation'); }
	get messagesTab() { return browser.element('#tabLayout'); }
	get messages() { return browser.element('#viewPager'); }

	homeScreenHasLoaded(){
		this.denyPermission.click();
		if(this.homeToolBar.waitForVisible(10000) &&
		this.bottomNav.waitForVisible(10000) && 
		this.messagesTab.waitForVisible(10000) && 
		this.messages.waitForVisible(10000) ){
			return true;
		}
		else{
			return false;
		}
	}
}

module.exports = { HomeScreen: HomeScreen };