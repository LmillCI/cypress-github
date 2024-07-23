describe ('search', ()=>
{
    it('product cart', ()=>
    {
         cy.visit("https://ecommerce-playground.lambdatest.io/");
         cy.get("input[@placeholder='Search For Products']").type("htc");

    })
})