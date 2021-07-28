describe('Home page elements', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000')
  })


  it('Should display article', () => {
     cy.get('.articleCard').should('be.visible')
       .get('.image').should('be.visible')
       .get('.title').should('be.visible')
       .get('p').should('be.visible')
  });

  it('Should display logo', () => {
     cy.get('.logo').should('be.visible')
  });

  it('Should display search bar', () => {
     cy.get('#search').should('be.visible')
  });

  it('When a user types into the search bar the results are filtered', () => {
     cy.get('#search').type('Simone')
       .get('.articleCard').should('be.visible')
       .get('.image').should('be.visible')
       .get('.title').should('be.visible')
       .get('p').should('be.visible')
  });

  it('When no articles match the users search, they are notified', () => {
     cy.get('#search').type('yolo')
       .get('.searchError').contains('Sorry no articles match your search!')
  });


});
