import BasePage from "./BasePage"

export default class LoginPage extends BasePage {

    static login(username, password){
        cy.login(username, password)
    }

    static clickForgotPasswordlink(){
        cy.contains('Forgot yout password ?').click()

    }

    static displayErrorMessage(){
        cy.isVisible('.alert-error')

    }

}