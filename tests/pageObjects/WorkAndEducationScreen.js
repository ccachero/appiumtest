const Resources = require('../resources/WorkAndEducationResources.js').WorkAndEducationResources;
var resources = new Resources();

class WorkAndEducationScreen{

	//inputs all fields for adding a University to Profile
	addUniversityEducation(universityName, degreeName, degreeLevel, field, description, skill){
		resources.addUniversityButton().click();
		this.addUniversityName(universityName);
		this.addDegreeName(degreeName);
		this.addDegreeLevel(degreeLevel);
		this.addFieldOfStudy(field);
		this.setFromDate();
		this.setToDate();
		this.addDescription(description);
		this.addSkill(skill);
		this.save();
		// this.GPADrag(this.GPABar);
	}

	addUniversityName(universityName){
		resources.universityNameField().waitForVisible(10000);
		resources.universityNameField().click();
		resources.searchField().waitForVisible(10000);
		resources.searchField().setValue(universityName);
		resources.universityItemField(universityName).waitForVisible(10000);
		resources.universityItemField(universityName).click();
	}

	addDegreeName(degreeName){
		resources.degreeNameField().waitForVisible(10000);
		resources.degreeNameField().setValue(degreeName);
	}

	addDegreeLevel(degreeLevel){
		resources.degreeLevelField().waitForVisible(10000);
		resources.degreeLevelField().click();
		resources.degreeLevelChoice(degreeLevel).waitForVisible(10000);
		resources.degreeLevelChoice(degreeLevel).click();
	}

	addFieldOfStudy(field){
		resources.fieldOfStudyField().waitForVisible(10000);
		resources.fieldOfStudyField().click();
		resources.searchField().waitForVisible(10000);
		resources.searchField().setValue(field);
		resources.fieldOfStudySearchItem(field).waitForVisible(10000);
		resources.fieldOfStudySearchItem(field).click();
	}

	setFromDate(){
		resources.fromDateField().waitForVisible(10000);
		resources.fromDateField().click();
		resources.currentYearSelected().waitForVisible(10000);
		resources.currentMonthSelected().waitForVisible(10000);
		resources.previousMonth().click();
		resources.toFromOKButton().click();
	}

	setToDate(){
		resources.toDateField().waitForVisible(10000);
		resources.toDateField().click();
		resources.currentYearSelected().waitForVisible(10000);
		resources.currentMonthSelected().waitForVisible(10000);
		resources.toFromOKButton().click();
	}

	addDescription(description){
		resources.descriptionField().waitForVisible(10000);
		resources.descriptionField().setValue(description);
	}

	addSkill(skill){
		resources.addSkillsButton().waitForVisible(10000);
		resources.addSkillsButton().click();
		resources.searchField().waitForVisible(10000);
		resources.searchField().setValue(skill);
		resources.searchSkillsItem(skill).waitForVisible(10000);
		resources.searchSkillsItem(skill).click();
		resources.saveButton().click();
	}

	save(){
		if(resources.addUniversityTitleBar().waitForVisible(10000) && resources.saveButton().waitForVisible(10000)){
			resources.saveButton().click();
		}
	}

	clickAddUniversity(){
		if(resources.addUniversityButton().waitForVisible(10000)){
			resources.addUniversityButton().click();
		}
	}

	// this is something I wasn't able to do :(
	// GPADrag(selector){
	// 	selector.waitForVisible(10000);
	// 	var start = selector.getLocation();
	// 	console.log(GPAlocation);
	// }
}

module.exports = { WorkAndEducationScreen: WorkAndEducationScreen };