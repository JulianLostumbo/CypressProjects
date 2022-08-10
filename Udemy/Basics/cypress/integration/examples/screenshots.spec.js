/// <reference types="cypress" />

describe("Screenshots", ()=>{
    
    beforeEach(()=>{
        cy.visit('http://devexpress.github.io/testcafe/example/')
    })

    it('full page screenshots', () =>{
        cy.screenshot({capture: "fullPage"})
    })

    it('single element screenshots', () =>{
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
    })

})