/// <reference types="cypress" />

describe("Device Tests", ()=>{
    
    it('720p', () =>{
        cy.viewport(1280, 720)
        cy.visit('http://books.toscrape.com/index.html')
        cy.wait(3000)
    })

    it('1080p', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://books.toscrape.com/index.html')
        cy.wait(3000)
    })

    it('Iphone X', ()=>{
        cy.viewport('iphone-x')
        cy.visit('http://books.toscrape.com/index.html')
        cy.wait(3000)
    })

    it('Ipad Mini', ()=>{
        cy.viewport('ipad-mini')
        cy.visit('http://books.toscrape.com/index.html')
        cy.wait(3000)
    })

    it('MacBoook', ()=>{
        cy.viewport('macbook-15')
        cy.visit('http://books.toscrape.com/index.html')
        cy.wait(3000)
    })
})