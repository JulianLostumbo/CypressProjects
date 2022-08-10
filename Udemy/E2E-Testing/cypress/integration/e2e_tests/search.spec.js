/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit with pressing enter and show results according to the research', () => {
        cy.get('#searchTerm').type('some text {enter}')
        cy.get('h2').contains('Search Results:')
    })
})