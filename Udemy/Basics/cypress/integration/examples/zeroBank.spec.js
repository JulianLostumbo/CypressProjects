/// <reference types="cypress" />

describe("Working with inputs", ()=>{
    beforeEach(()=>{

        //override the current time in the browser
        const date = new Date(2020, 3, 10).getTime() //returns a timestamp
        cy.clock(date)
        cy.log(date)

        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
    })

    it('should display an error message after fulfilling usename and password incorrectly', () =>{
      cy.get('#user_login').as('username')
      cy.get('@username').clear()
      cy.get('@username').type('Some invalid name', {delay: 50 })
      cy.get('#user_password').as('password')
      cy.get('@password').clear()
      cy.get('@password').type('Some invalid password',  {delay: 50 })
      cy.get('input[type="checkbox"]').click()
      cy.get('input[type="checkbox"]').should('be.checked')
      cy.contains('Sign in').click()
      cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

})