const Resources = require('../resources/MessagingResources.js').MessagingResources;
var resources = new Resources();

class MessagingScreen{

    //check if elements in the messaging screen are visible
    messagingScreenHasLoaded(){
        if(resources.createThreadButton().waitForVisible(10000) && resources.groupsTab().waitForVisible(10000))
    	return true;
    }

    createNewChannel(channelName, channelDescription, channelPrivacy, photoSource, permission){
       
        //navigate to Groups Tab and clicks Create Channel button
        this.navigateToGroupsTab();
        resources.createChannelButton().click();

        //Adds Channel Name and Description to the new channel
        this.addChannelName(channelName);
        this.addChannelDescription(channelDescription);

        //hide Device Keyboard to click Channel Privacy
        browser.hideDeviceKeyboard();

        //add Channel Privacy
        this.channelPrivacy(channelPrivacy);
        
        //add photo to the channel, as of now, only Take a Photo option is available
        this.addPhoto(photoSource, permission);
        
        //save the new channel
        this.saveNewChannel();
    }

    addChannelName(channelName){
        resources.createChannelNameField().waitForVisible(10000);
        resources.createChannelNameField().setValue(channelName);
    }

    addChannelDescription(channelDescription){
        resources.createChannelDescriptionField().waitForVisible(10000);
        resources.createChannelDescriptionField().setValue(channelDescription);
    }

    channelPrivacy(channelPrivacy){
        resources.createChannelPrivacyField().waitForVisible(10000);
        resources.createChannelPrivacyField().click();
        resources.createChannelPrivacySelector(channelPrivacy).waitForVisible(10000);
        resources.createChannelPrivacySelector(channelPrivacy).click();
    }

    addPhoto(photoSource, permission){
        resources.createChannelAddPhoto().waitForVisible(10000);
        resources.createChannelAddPhoto().click();
        resources.createChannelAddPhotoSource(photoSource).waitForVisible(10000);
        resources.createChannelAddPhotoSource(photoSource).click();
        resources.allowOrDenyPhotoPermission(permission).click();
        resources.capturePhotoButton().waitForVisible(10000);
        resources.capturePhotoButton().click();
    }

    navigateToGroupsTab(){
        resources.groupsTab().waitForVisible(10000);
        resources.groupsTab().click();
    }

    saveNewChannel(){
        resources.finishCreateChannelButton().waitForVisible(10000);
        resources.finishCreateChannelButton().click();
    }

    //get the channel name of the new thread
    channelNameOfNewThread(){
        if(resources.threadTitle().waitForVisible(10000) && resources.threadPhoto().waitForVisible(10000))
        return resources.threadTitle().getText();
    }

}

module.exports = { MessagingScreen: MessagingScreen };