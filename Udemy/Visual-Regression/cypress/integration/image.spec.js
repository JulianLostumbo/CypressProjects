/// <reference types="cypress" />
const pages = ['http://books.toscrape.com/index.html']
const sizes =['iphone-6', 'ipad-2', [1200, 800]]

describe('Visual Regression', () =>{
    it('First visual regression test', () =>{
        cy.visit('http://books.toscrape.com/index.html')
        cy.matchImageSnapshot()
    })

    sizes.forEach(size => {
        pages.forEach(page=>{
            it(`Should match ${page} in resolution ${size}`, ()=>{
                let currentTime = new Date(Date.UTC(2020, 1, 1).getDate())
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })

    it('Should take a single element snapchot', () => {
        cy.visit('http://books.toscrape.com/index.html')
        cy.get('h1').matchImageSnapshot({
            failureThreshold: 10,
            failureThresholdType: "pixels"
        })
    })
})