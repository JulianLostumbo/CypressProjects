/// <reference types="cypress" />

describe("Login with fixture data", ()=>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should try login', () =>{
      cy.fixture('user').then(user => {
          const username = user.username
          const password = user.password
          cy.get('#user_login').as('username')
          cy.get('@username').clear()
          cy.get('@username').type(username, {delay: 50 })
          cy.get('#user_password').as('password')
          cy.get('@password').clear()
          cy.get('@password').type(password,  {delay: 50 })
      })
      cy.get('input[type="checkbox"]').click()
      cy.get('input[type="checkbox"]').should('be.checked')
      cy.contains('Sign in').click()
      cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

})