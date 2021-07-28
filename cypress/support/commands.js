Cypress.Commands.add('stub', () => {
  cy.fixture('mock-data.js')
    .then(mockData => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=7cmW2bTtZsyORJ4AO6sB8RJkAJh34ji4', {
        statusCode: 201,
        delay: 100,
        body: mockData
      })
    })
})
