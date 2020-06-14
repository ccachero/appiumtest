//This test case verifies that a user is able to successfully add a University to their profile

const UserProfile = require('../pageObjects/UserProfile.js').UserProfile;
const HomeScreen = require('../pageObjects/HomeScreen.js').HomeScreen;
const SplashScreen = require('../pageObjects/SplashScreen.js').SplashScreen;
const LoginScreen = require('../pageObjects/LoginScreen.js').LoginScreen;
const WorkAndEducationScreen = require('../pageObjects/WorkAndEducationScreen.js').WorkAndEducationScreen;
var userProfile = new UserProfile();
var homeScreen = new HomeScreen();
var splashScreen = new SplashScreen();
var loginScreen = new LoginScreen();
var workAndEducationScreen = new WorkAndEducationScreen();

describe('Test Add Education', function () {

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

   it('When User Navigates to User Profile', function () {
  	homeScreen.navigateToUserProfile();
  })

   it('Then User Profile Should Be Loaded Successfully', function () {
  	expect(userProfile.userProfileHasLoaded()).toBe(true);
  })

   it('When User Adds new Education', function () {
    //navigates to Work And Education tab and adds a University to the profile
    userProfile.editProfile();
    userProfile.editWorkAndEducation();
    workAndEducationScreen.clickAddUniversity();
    workAndEducationScreen.addUniversityName("University of Kansas");
    workAndEducationScreen.addDegreeName("Computer Science");
    workAndEducationScreen.addDegreeLevel("Bachelor");
    workAndEducationScreen.addFieldOfStudy("Computer Science");
    workAndEducationScreen.setFromDate();
    workAndEducationScreen.setToDate();
    workAndEducationScreen.addDescription("test");
    workAndEducationScreen.addSkill("test");
    workAndEducationScreen.save();
    expect(userProfile.editProfileHasLoaded()).toBe(true);
  })
   it('Then New Education Should be seen on Profile page', function () {
    expect(userProfile.universityIsPresent("Computer Science", "Bachelors", "University of Kansas")).toBe(true);
  })
 
})
