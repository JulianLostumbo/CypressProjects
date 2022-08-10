/// <reference types="Cypress" />

describe('REST API Test', () =>{
    it('Validate headers', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/5').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })

    it('Validate status code', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/5').as('pokemon')
        cy.get('@pokemon').its('status').should('be.eq', 200)
    })

    it('Validate body', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/5').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name:'charmeleon'})
    })

    it('Validate negative status code', () =>{
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/898989',
            failOnStatusCode: false
        }).as('pokemon')
        cy.get('@pokemon').its('status').should('be.eq', 404)
    })
})