/// <reference types="cypress" />

describe('Password Test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on the sign in button in order to retrieve a password after clicking on the forgotten password', () => {
        cy.get('#signin_button').click()
        cy.get('.offset3 > a').click()
        cy.get('#user_email').type('test@email.com')
        cy.contains('Send Password').click()
        cy.get('.offset3').should('contain.text', `Your password will be sent to the following email: test@email.com`)
    })
})