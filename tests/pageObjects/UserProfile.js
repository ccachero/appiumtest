const Resources = require('../resources/UserProfileResources.js').UserProfileResources;
var resources = new Resources();

class UserProfile{

	//check if elements of the user profile page are visible
	userProfileHasLoaded(){
		if(resources.username().waitForVisible(10000) &&
		resources.settingsToolBar().waitForVisible(10000)){
			return true;
		}
		else{
			return false;
		}
	}

	//check if elements of the edit profile page are visible
	editProfileHasLoaded(){
		if(resources.editProfileTitleBar().waitForVisible(10000)){
			return true;
		}
		else{
			return false;
		}
	}

	//click to edit profile
	editProfile(){
		resources.profileEdit().click();
	}

	//switch to Work and Education tab
	editWorkAndEducation(){
		resources.workAndEducationTab().click();
	}

	//check if University is present
	universityIsPresent(degree, degreeLevel, universityName){
		if(resources.degree(degree).waitForVisible(10000) && resources.degreeLevel(degreeLevel).waitForVisible(10000) && resources.universityName(universityName).waitForVisible(10000)){
			return true;
		}
		else{
			return false;
		}
	}
}

module.exports = { UserProfile: UserProfile };