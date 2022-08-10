const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const ERROR_MESSAGE = '.alert-error'
export default class loginPage{

    static visit(){
        cy.visit(URL)
    }

    static fillUsername(name){
        cy.get(USERNAME).type(name)
    }

    static fillPassword(password){
        cy.get(PASSWORD).type(password)
    }

    static submitForm(){
        cy.contains('Sign in').click()
    }

    static checkErrorMessage(){
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
    }

}