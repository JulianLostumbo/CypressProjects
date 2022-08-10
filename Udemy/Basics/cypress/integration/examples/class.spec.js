/// <reference types="cypress" />

class BasePage {
    static loadHomePage(){
        cy.visit('http://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}

describe("Abstraction with Classes", ()=>{
    beforeEach(()=>{
        HomePage.loadHomePage()
    })

    it('should select an option from select box', () =>{
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
    })

})