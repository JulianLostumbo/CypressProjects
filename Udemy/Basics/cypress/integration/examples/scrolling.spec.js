/// <reference types="cypress" />

describe("Scrolling the page", ()=>{
    
    beforeEach(()=>{
        cy.visit('http://devexpress.github.io/testcafe/example/')
    })

    it('should scroll down and up on the page', () =>{
        cy.wait(5000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()
    })

})