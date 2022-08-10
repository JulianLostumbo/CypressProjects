declare namespace Cypress{
    interface Chainable{
        /**
         * @param {string} username - takes the username
         * @param {string} password - takes the user password
         */
        login(username: string, password: string): Chainable<Element>
        /**
         * @param {string} name - takes the name of the message author
         * @param {string} email - takes the email
         * @param {string} subject - takes subject of the message
         * @param {string} message - takes messages of the author
         */
        submitFeedback(name: string, email:string, subject: string, message: any): Chainable<Element>
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})

Cypress.Commands.add('submitFeedback', (name, email, subject, message) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(message)
    cy.contains('Send Message').click()
})

