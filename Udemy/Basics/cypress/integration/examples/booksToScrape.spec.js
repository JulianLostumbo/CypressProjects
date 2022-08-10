/// <reference types="cypress" />

describe("Browser actions", ()=>{
    beforeEach(()=>{
        cy.visit('http://books.toscrape.com/index.html', {timeout: 5000})
    })
    it('should load books website', () =>{
        cy.url().should('include', 'index')
    })

    it('check web page title', ()=>{
        cy.title().should('include', 'All products | Books to Scrape - Sandbox')
    })

    it('should click on Travel category', ()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
    it('should display correct number of books', ()=>{
        cy.get('a').contains('Travel').click()
        /*let resultsValue
        cy.get('.form-horizontal > strong').then((results) => {            
            resultsValue = parseInt(results.text());
            console.log(resultsValue) //resultsValue equals to 11        
          })
        console.log(resultsValue) //resultsValue equals to undefined ??*/
        cy.get('.form-horizontal > strong').invoke('text').as('resultsValue')
        cy.get('.product_pod').its('length').then(length => {
            cy.get('@resultsValue').should('eq', length.toString())
        })
    })

    it('check price of Olio', ()=>{
        cy.get('a').contains('Poetry').click()
        cy.get('a').contains('Olio').click()
        cy.get('.product_main > .price_color').should('contain.text','23.88')

    })
})


