describe('mysuite4', ()=>
{
 it('manual screenshot', ()=>
{
    //intentionally capturing the screenshots
     cy.visit("https://www.opencart.com/index.php?route=cms/demo");
     //cy.screenshot();//random name
     //cy.screenshot("homepage");
     //cy.screenshot('homepage');//specific directory
     cy.screenshot({ clip: { x: 20, y: 10, width: 400, height: 300 } })//specific position and size
     //specific element logo screenshot  and save screenshot in specific directory
     cy.get("img[title='OpenCart - Demo']").screenshot('sampactions/less/logo');
})
})