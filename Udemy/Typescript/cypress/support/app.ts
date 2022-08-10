declare namespace Cypress{
    interface Chainable{
        visitHomepage(): Chainable<Element>
        
        visitLoginpage(): Chainable<Element>
        
        visitFeedbackpage(): Chainable<Element>

        waitForSeconds(seconds: number): Chainable<Element>

    }
}

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitLoginpage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackpage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('waitForSeconds', (seconds) => {
    cy.wait(seconds*1000)
})