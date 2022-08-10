/// <reference types="Cypress"/>
describe('Cypress tests with Docker', ()=>{
    it('should load the website', ()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index')
    })
})