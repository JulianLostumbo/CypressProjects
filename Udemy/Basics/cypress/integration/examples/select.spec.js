/// <reference types="cypress" />

describe("Select box", ()=>{
    beforeEach(()=>{
        cy.visit('http://devexpress.github.io/testcafe/example/')
    })

    it('should select an option from select box', () =>{
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')
    })

})