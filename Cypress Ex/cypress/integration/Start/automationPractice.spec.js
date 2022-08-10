/// <reference types="cypress" />

describe('Automation Practice', () => {

  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php")
  })
      
    it("an alert should be displayed after making a search with 'Endava'",function(){

      cy.get('#search_query_top').type('Endava')
    
      cy.get('#searchbox > .btn').click()
    
      cy.contains('No results were found for your search "Endava"')
    
    
    })

    it.only("Verify product name", () => {
    
      cy.get('#search_query_top').type('shirt')
    
      cy.get('#searchbox > .btn').click()
      
      cy.get('.right-block > h5 > .product-name').contains('Faded Short Sleeve T-shirts')

      cy.get('.right-block > h5 > .product-name').click()

      cy.get('h1').should('have.text', 'Faded Short Sleeve T-shirts')
    
    })
})