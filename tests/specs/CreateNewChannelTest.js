//This test case verifies that a user is able to create new channels from the messaging tab

const UserProfile = require('../pageObjects/UserProfile.js').UserProfile;
const HomeScreen = require('../pageObjects/HomeScreen.js').HomeScreen;
const SplashScreen = require('../pageObjects/SplashScreen.js').SplashScreen;
const LoginScreen = require('../pageObjects/LoginScreen.js').LoginScreen;
const MessagingScreen = require('../pageObjects/MessagingScreen.js').MessagingScreen;
var userProfile = new UserProfile();
var homeScreen = new HomeScreen();
var splashScreen = new SplashScreen();
var loginScreen = new LoginScreen();
var messagingScreen = new MessagingScreen();

describe('Test Create New Channel', function () {

  afterAll(function (){
    browser.end();
  });
  
  it('Given User Is In Splash Screen', function () {
  	expect(splashScreen.splashScreenHasLoaded()).toBe(true);
    splashScreen.navigateToLogin();
  })

  it('When User Navigates To Login Screen', function () {
    expect(loginScreen.loginScreenHasLoaded()).toBe(true);
  })

  it('When User Enters Credentials and Logins', function () {
    loginScreen.login("639273778990", "Pa55w0rd");
    expect(loginScreen.finishLogIn()).toBe(true);
  	expect(homeScreen.homeScreenHasLoaded()).toBe(true);
  })

   it('When User Navigates to Messaging Page', function () {
  	homeScreen.navigateToMessages();
    expect(messagingScreen.messagingScreenHasLoaded()).toBe(true);
  })

   it('When User Creates a new Channel', function () {
    messagingScreen.createNewChannel("testChannel", "test Description", "Private", "Take a Photo", "ALLOW");
  })

   it('Then New Channel should be created', function () {
    expect(messagingScreen.channelNameOfNewThread()).toBe("testChannel");
  })
 
})
