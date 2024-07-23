describe('Assertions demo', () => {
    it('Implicit assertions', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      //should   and
      cy.url().should('include','orangehrmlive.com')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/')
      cy.url().should('contain','orangehrm')
    }
    )
  
    
  })
  
  
  
  