// beforeEach(() => {
//   cy.viewport(1280, 720)
// })

describe('Should load the website', () => {
  it('Go to the website', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Click the plus button', () => {
    cy.findByTestId('plusBtn').click()
    cy.findByTestId('plusBtn').click()
    cy.findByTestId('plusBtn').click()
  })
})

export {}
