class HomePage {
  constructor() {
    this.url = 'https://example.cypress.io'
  }

  /**
   * Navigates to the home page
   */
  visit() {
    cy.visit(this.url)
  }
}

export { HomePage }
