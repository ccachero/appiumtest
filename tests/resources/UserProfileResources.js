const Common = require('../helpers/Common.js').Common;
var common = new Common();

class UserProfileResources{
	username() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/profile_toolbar_tv_username")');
	}
	settingsToolBar() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/profile_toolbar_btn_setting")');
	 }
	profileEdit() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/profile_toolbar_btn_edit")');
	}
	workAndEducationTab(){
		return common.getUISelector('new UiSelector().className("androidx.appcompat.app.ActionBar$Tab").descriptionContains("Work & Education")');
	}
	
	addUniversityButton(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/add_item_btn_title").text("Add university")');
	}
	universityName(universityName){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/tv_edu_work_detail_2").text("${universityName}")`);
	}
	degreeLevel(degreeLevel){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/tv_edu_work_detail_1").text("${degreeLevel}")`);
	}
	degree(degree){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/tv_edu_work_title").text("${degree}")`);
	}
	editProfileTitleBar(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/actionBarTitle").text("EDIT PROFILE")');
	}
}

module.exports = { UserProfileResources: UserProfileResources };