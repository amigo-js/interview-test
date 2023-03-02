import LogInPage from "../support/pages/login.page";

describe('Launches', () => {
	const logInPage = new LogInPage();

	before(()  => {
		logInPage.visit()
		logInPage.login();	
	})

	it('Successfully login', () => {
		logInPage.welcomeVerification();
	})	
	
});