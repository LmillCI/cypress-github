// Before
cy.get('.btn').click((event, param1, param2) => {
    // param1 and param2 are unused
    event.preventDefault();
  });
   
  
