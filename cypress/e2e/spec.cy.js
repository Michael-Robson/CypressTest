import { HomePage } from '../pages/homePage'

describe('Home page tests', () => {
  const homePage = new HomePage()

  it('passes', () => {
    homePage.visit()

    // eslint-disable-line cypress/no-unnecessary-waiting
    cy.wait(1000)
  })
})
