/// <reference types="cypress" />

import {username, password} from  "../../fixtures/credentials/credentials.json";

export default class LogInPage {

    getLogIn(){
        return cy.get('#login2', {timeout: 30000});
    }
    clickLogIn(){
        return this.getLogIn().click({force:true});
    }
    
    getUserNameInput(){
        return cy.get('#loginusername', {timeout: 30000});
    }
    typeUserNameInput(value: string) {
    return this.getUserNameInput()
        .should('be.visible')
        .click({ force: true })
        .clear()
        .invoke('val', value)
        .trigger('input', { force: true });
    }

    getPasswordInput(){
        return cy.get('#loginpassword', {timeout: 30000});
    }

    typePasswordInput(value: string) {
        return this.getPasswordInput()
            .should('be.visible')
            .click({ force: true })
            .clear()
            .invoke('val', value)
            .trigger('input', { force: true });
        }


    clickLogInBttn(){
        return cy.get('.btn-primary', {timeout: 30000}).contains('Log in').click({force:true});
    }

    visit = () => {
        cy.viewport(1920, 1080);
        cy.visit((Cypress.env('urlDemo') ), {timeout: 30000});
    }




    login = () => {
        cy.wait(3000)
        this.clickLogIn().then(() => {
            this.getUserNameInput().then(() => {
                this.typeUserNameInput(username).then(() => {
                    this.getPasswordInput().then(() => {
                        this.typePasswordInput(password)
                        this.clickLogInBttn()
                    })
                })
            }) 
            
        })
    }

    welcomeVerification() {
        return cy.get('#nameofuser', {timeout: 30000}).should('have.text', 'Welcome automatedUser26@example.com');
    }
    
    }
