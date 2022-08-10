/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should switch to Online Banking screen correctly by using the navbar button', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('be.visible')
    })
})