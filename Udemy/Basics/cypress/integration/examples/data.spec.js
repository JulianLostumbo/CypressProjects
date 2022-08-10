/// <reference types="cypress" />

describe("Write / Read data to JSON", ()=>{

    it('should write data into JSON', () =>{
        cy.writeFile('log.json', { name:"Juli", age: 22 })
    })

    it('should write data into txt file', () =>{
        cy.writeFile('log.txt', "Hello world")
    })

    it('should read data into JSON and verify its data', () =>{
        cy.readFile('log.json').its('age').should('eq', 22)
    })

    it('should read data into txt file and verify its data', () =>{
        cy.readFile('log.txt').should('contain', 'world')
    })

    it('should read and verify browser document content', () =>{
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.property','charset').and('eq', 'UTF-8')
    })

})