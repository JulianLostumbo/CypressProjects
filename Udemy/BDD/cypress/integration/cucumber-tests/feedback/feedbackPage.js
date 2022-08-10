const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT= '#email'
const SUBJECT = '#subject'
const COMMENT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

export default class FeedbackPage{
    static visit(){
        cy.visit(URL)
    }

    static fillFeedbackForm(){
        cy.get(NAME_INPUT).type('name')
        cy.get(EMAIL_INPUT).type('name@mail.com')
        cy.get(SUBJECT).type('some subject')
        cy.get(COMMENT).type('a comment')
    }

    static submitFeedbackForm(){
        cy.get(SUBMIT_BUTTON).click()
    }
}