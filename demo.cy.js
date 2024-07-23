describe('mysuite3', ()=>
{
 it('saucedemo login ', ()=>
{
    //intentionally captueing the screenshots
     cy.visit("https://www.saucedemo.com/v1/");
    //  cy.screenshot("homepage");//random name
    //  //specific element logo 
    //  cy.get("img[title='OpenCart - Demo']").screenshot("logo");
    
    cy.get('#user-name').type('standard_user');
     cy.get("#password").type('secret_sauce');
     cy.get("#login-button").click();

     
     
    
})
})