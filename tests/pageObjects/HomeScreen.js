const Resources = require('../resources/HomeScreenResources.js').HomeScreenResources;
var resources = new Resources();

class HomeScreen{

	//check if elements in the home screen are visible
	homeScreenHasLoaded(){
		// browser.sleep(10000);
		if(resources.discoverTab().waitForExist(20000) &&
		resources.opportunitiesTab().waitForExist(20000) && 
		resources.messagingTab().waitForExist(20000) &&
		resources.userProfileTab().waitForExist(20000)){
		return true;
		}
		else{
			return false;
		}
	}
	//navigate to YOU tab
	navigateToUserProfile(){
		resources.userProfileTab().click();
	}
	//navigate to Messages tab
	navigateToMessages(){
		resources.messagingTab().click();
	}
}

module.exports = { HomeScreen: HomeScreen };