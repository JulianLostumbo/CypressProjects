/// <reference types="cypress" />

describe('New payee Test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    })

    it('should show a success message after adding a new payee', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('45456456')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()
        cy.get('#alert_content').should('be.visible').and('contain','The new payee Name was successfully created')
    })
})