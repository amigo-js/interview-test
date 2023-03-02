/// <reference types="cypress" />

export default class CheapestPhonePage {

  getPhones(){
    return cy.get('.list-group-item', {timeout: 30000}).contains('Phones');
  }

  clicPhones(){
    return this.getPhones().click({force:true});
  }

  clickAddToCart(){
    return cy.get('.btn.btn-success.btn-lg', {timeout: 30000}).contains('Add to cart').click({force:true});
  }

  findCheapestProduct() {
    cy.get('.col-lg-4.col-md-6.mb-4 h5')
      .invoke('text')
      .then((texts: string | string[]) => {
        if (typeof texts === 'string') {
          texts = [texts];
        }

        const prices: number[] = [];
        // map price to product name
        const priceMap: { [key: number]: string } = {}; 

        texts.forEach(text => {
          const priceStrings = text.split('$').filter(str => str.length > 0);
          const numericPrices = priceStrings.map(str => Number(str.trim()));
          prices.push(...numericPrices);
          // assume first price is the minimum
          priceMap[numericPrices[0]] = text; 
        });

        const minPrice = Math.min(...prices);
        console.log('Minimum price is:', minPrice);

        // Find the product card with the minimum price and click on it
        cy.get('.col-lg-4.col-md-6.mb-4')
          .contains(`$${minPrice}`)
          .closest('.col-lg-4.col-md-6.mb-4')
          .find('a')
          .invoke('attr', 'href')
          .then(href => {
            // console log href and then reusing it to lunch the page with phone with min price
            console.log(href);
            cy.visit(`https://www.demoblaze.com/${href}`);
          });
      });
  }
}