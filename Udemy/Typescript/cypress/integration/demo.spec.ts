describe('Demo test', () => {
    it('should login on the webpage', () => {
        cy.visitLoginpage()
        cy.fixture('loginData').then(({username, password}) => {
            cy.login(username, password)
        })
    })

    it('should submit a feedback', () => {
        cy.visitFeedbackpage()
        cy.fixture('feedbackData').then(({name, email, subject, message}) => {
            cy.submitFeedback(name, email, subject, message)
        })
        
    })
})