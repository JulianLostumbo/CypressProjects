/// <reference types="cypress" />

describe('Feedback Test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should load, fill and submit feedback form', () => {
        cy.contains('Feedback').click()
        cy.get('form').should('be.visible')
        cy.get('#name').type('name')
        cy.get('#email').type('email')
        cy.get('#subject').type('some subject')
        cy.get('#comment').type('some comment')
        cy.get('.btn-signin').click()
        cy.get('#feedback-title').contains('Feedback')
    })
})