const Common = require('../helpers/Common.js').Common;
var common = new Common();

class WorkAndEducationResources{

	addUniversityButton(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/add_item_btn_title").text("Add university")');
	}
	universityNameField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_uni_name").text("University Name")');
	}
	universityItemField(universityName){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/search_name").textContains("${universityName}")`);
	}
	searchField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_search")');
	}
	degreeNameField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_degree_name").text("Degree Name")');
	}
	degreeLevelField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_degree_level").text("Degree Level")');
	}
	degreeLevelChoice(levelChoice){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/title").textContains("${levelChoice}")`);
	}
	fieldOfStudyField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_field").text("Field of Study")');
	}
	fieldOfStudySearchItem(field){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/stringText").textContains("${field}")`);
	}
	currentMonthSelected(){
		return common.getUISelector('new UiSelector().className("android.widget.NumberPicker").index(0).childSelector(new UiSelector().resourceId("android:id/numberpicker_input"))');
	}
	previousMonth(){
		return common.getUISelector('new UiSelector().className("android.widget.NumberPicker").index(0).childSelector(new UiSelector().className("android.widget.Button").index(0))');
	}
	currentYearSelected(){
		return common.getUISelector('new UiSelector().className("android.widget.NumberPicker").index(1).childSelector(new UiSelector().resourceId("android:id/numberpicker_input"))');
	}
	fromDateField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_date_from").text("From")');
	}
	toDateField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_date_to").text("To (or Expected)")');
	}
	toFromOKButton(){
		return common.getUISelector('new UiSelector().resourceId("android:id/button1").text("OK")');
	}
	descriptionField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_description")');
	}
	addSkillsButton(){
		return common.getUISelector('new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().resourceId("org.goodwall.app:id/btn_add_skills").text("Add Skill"))');
	}
	saveButton(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/actionBarSave").textContains("Save")');
	}
	searchSkillsItem(skill){
		return common.getUISelector(`new UiSelector().resourceId("org.goodwall.app:id/stringText").textContains("${skill}")`);
	}
	GPABar(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/seek_avg_grade")');
	}
	addUniversityTitleBar(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/actionBarTitle").text("ADD UNIVERSITY")');
	}
}

module.exports = { WorkAndEducationResources: WorkAndEducationResources };