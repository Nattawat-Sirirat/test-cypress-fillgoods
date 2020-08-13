const url= 'https://app.fillgoods.co/login'
const loginbtn= '//*[@id="app"]/div/div/div/div/div/div[2]/form/div/div[2]/div[1]/button'
const username= '//*[@id="input-34"]'
const password= '//*[@id="input-37"]'

describe('login to fillgoods',() =>{
   it('visit fillgood.co', function(){
       cy.visit(url)
   })
   it('Input username', function(){
       cy.get(username).type('nattsu2537@gmail.com')
   })
   it('Input password', function(){
       cy.get(password).type('nattsu20')
   })
   it('Click login', function(){
       cy.click(loginbtn)
   })

})