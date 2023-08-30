import { HomePage } from '../pages/homePage'

describe('Fail on purpose', () => {
  const homePage = new HomePage()

  it('Fails to show off report', () => {
    homePage.visit()

    assert.equal(
      1,
      2,
      'Fails on purpose to show what a failed test looks like in the test report'
    )
  })
})
