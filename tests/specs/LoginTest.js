const HomeScreen = require('../pageObjects/HomeScreen.js').HomeScreen;
const WelcomeScreen = require('../pageObjects/WelcomeScreen.js').WelcomeScreen;
const SplashScreen = require('../pageObjects/SplashScreen.js').SplashScreen;
const LoginScreen = require('../pageObjects/LoginScreen.js').LoginScreen;
var homeScreen = new HomeScreen();
var welcomeScreen = new WelcomeScreen();
var splashScreen = new SplashScreen();
var loginScreen = new LoginScreen();

describe('Test Login', function () {
  beforeAll(function (){
  var testdata = [{"username":user1,"password":password1,"result":false},{"username":user2,"password":password2,"result":true},{"username":user3,"password":password3,"result":true}];
  });
  afterAll(function (){
    browser.end();
  });
  for(var i in testdata){
  it('Given User Is In Splash Screen', function () {
  	expect(splashScreen.splashScreenHasLoaded()).toBe(true);
    splashScreen.navigateToLogin();
  })
  it('When User Navigates To Login Screen', function () {
    expect(loginScreen.loginScreenHasLoaded()).toBe(true);
  })
  it('When User Enters Credentials and Logins', function () {
    loginScreen.login(testdata[i].username, testdata[i].password);
  	expect(welcomeScreen.welcomeScreenHasLoaded()).toBe(testdata[i].result);
  })
   it('When User Skips Welcome Onboarding', function () {
  	welcomeScreen.navigateToHome();
  })
   it('Then Home Screen Elements Should Be Loaded Successfully', function () {
  	expect(homeScreen.homeScreenHasLoaded()).toBe(true);
    console.log('Test has passed');
  })
 }
})
