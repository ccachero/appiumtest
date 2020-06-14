const Common = require('../helpers/Common.js').Common;
var common = new Common();

class MessagingResources{

	createThreadButton() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/btn_create_thread")');
	}

	groupsTab() { 
		return common.getUISelector('new UiSelector().className("android.widget.TextView").text("Groups")');
	}

	createChannelButton() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/textViewChannelButtonText").text("Create a Channel")');
	}
	createChannelNameField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_channel_name").text("Channel Name")');

	}
	createChannelDescriptionField(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_channel_description").text("Channel Description")');
	}
	createChannelPrivacyField() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/et_channel_privacy")');
	}
	createChannelPrivacySelector(privacy){
		return common.getUISelector(`new UiSelector().resourceId("android:id/title").text("${privacy}")`);
	}
	createChannelAddPhoto() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/iv_add_photo")');
	}
	createChannelAddPhotoSource(source){
		return common.getUISelector(`new UiSelector().resourceId("android:id/text1").text("${source}")`);
	}
	allowOrDenyPhotoPermission(permission) { 
		return common.getUISelector(`new UiSelector().className("android.widget.Button").text("${permission}")`);
	}
	capturePhotoButton() { 
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/control_camera_action")');
	}
	finishCreateChannelButton(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/actionBarSave")');
	}
	threadTitle(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/actionBarTitle")');
	}
	threadPhoto(){
		return common.getUISelector('new UiSelector().resourceId("org.goodwall.app:id/actionBarSettingImageView")');
	}
}

module.exports = { MessagingResources: MessagingResources };