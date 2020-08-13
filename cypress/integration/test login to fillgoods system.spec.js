const url= 'https://app.fillgoods.co/login'

describe('login to fillgoods',() =>{
   it('visit fillgood.co', function(){
       cy.visit(url)
   })
   it('Input username', function(){
       cy.get('input[data-testid="emailInput"]').type('nattsu2537@gmail.com')
   })
   it('Input password', function(){
       cy.get('input[data-testid="passwordInput"]').type('nattsu20')
   })
   it('Click login', function(){
       cy.wait(5000)
       cy.get('button[data-testid="loginBtn"]').click()
       cy.wait(5000)
   })

})