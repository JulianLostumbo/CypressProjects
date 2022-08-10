describe('Xpath with cypress', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('Should click on an element using xpath', ()=>{
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()
    })

    it('should display login form', () =>{
        cy.xpath('//form').should('have.length', 1)
    })
})