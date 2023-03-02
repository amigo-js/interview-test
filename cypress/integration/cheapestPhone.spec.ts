import LogInPage from "../support/pages/login.page";
import CheapestPhonePage from "../support/pages/cheapest.phone.page"


describe('Launches', () => {
	const logInPage = new LogInPage();
    const cheapestPhonePage = new CheapestPhonePage();

	before(()  => {
		logInPage.visit()
		logInPage.login();	
	})

	it('Add the cheapest phone to cart', () => {
		cheapestPhonePage.clicPhones();
		cheapestPhonePage.findCheapestProduct();
        cheapestPhonePage.clickAddToCart();
})
})
