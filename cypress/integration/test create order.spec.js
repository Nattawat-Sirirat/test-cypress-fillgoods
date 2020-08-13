const url='https://app.fillgoods.co/app/home/dashboard'

describe('go to dashboard page',() => {
    it('go to dashboard page', function(){
        cy.visit(url)
    })
    it('click create orderbtn', function(){
        cy.wait(5000)
        cy.contains('button[aria-label="Close"]').click()
        cy.get('#Orders').click()
        //cy.get('#Orders').click()
    })
})