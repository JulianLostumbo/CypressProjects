/// <reference types="cypress" />

describe("Custom Commands", ()=>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should login to app using custom cypress command', () =>{
        cy.login('username', 'password')
    })

})