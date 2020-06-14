const Common = require('../helpers/Common.js').Common;
var common = new Common();

class HomeScreenResources{

	discoverTab(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/tab_item_title").text("DISCOVER")');
	}

	opportunitiesTab(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/tab_item_title").text("OPPORTUNITIES")');
	}

	messagingTab(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/tab_item_title").text("MESSAGING")');
	}

	userProfileTab(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/tab_item_title").text("YOU")');
	}

	welcomeScreenHasLoaded(){
		if(this.discoverTab.waitForVisible(30000) &&
		this.opportunitiesTab.waitForVisible(30000) && 
		this.messagingTab.waitForVisible(30000) &&
		this.userProfileTab.waitForVisible(30000)){
		return true;
		}
		else{
			return false;
		}
	}
	navigateToUserProfile(){
		this.userProfileTab.click();
	}
}

module.exports = { HomeScreenResources: HomeScreenResources };