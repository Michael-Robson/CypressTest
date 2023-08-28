describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    // eslint-disable-line cypress/no-unnecessary-waiting
    cy.wait(1000)
  })
})
