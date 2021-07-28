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


});
