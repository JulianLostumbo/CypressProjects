import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import FeedbackPage from './feedbackPage'
Given('I open feedback form', () => {
    FeedbackPage.visit()
})

When('I fill feedback form', (username)=>{
    FeedbackPage.fillFeedbackForm()
})

When('I click on send button', (password)=>{
    FeedbackPage.submitFeedbackForm()
})