// beforeEach(() => {
//   cy.viewport(1280, 720)
// })

describe('Should load the website and cart functionality', () => {
  it('Go to the website', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Click the plus button', () => {
    cy.findByTestId('plusBtn').click()
    cy.findByTestId('plusBtn').click()
    cy.findByTestId('plusBtn').click()
  })

  it('Checks the cart and close', () => {
    cy.get('.Navbarstyles__CartImage-sc-12cp6nt-4').click()
    cy.get('.Navbarstyles__CartImage-sc-12cp6nt-4').click()
  })

  it('Add Items to cart and check the cart then close it', () => {
    cy.get('[data-testid="add-to-cart"]').click()
    cy.get('.Navbarstyles__CartImage-sc-12cp6nt-4').click()
  })

  it('Delete cart items then close the cart', () => {
    cy.get('.delete').click()
    cy.get('.Navbarstyles__CartImage-sc-12cp6nt-4').click()
  })

  it('Click the plus button again 1 time and add to cart', () => {
    cy.findByTestId('plusBtn').click()
    cy.get('[data-testid="add-to-cart"]').click()
  })

  it('Click the plus button again 2 times and add to cart and check if total is correct then close', () => {
    cy.findByTestId('plusBtn').click()
    cy.findByTestId('plusBtn').click()
    cy.get('[data-testid="add-to-cart"]').click()
    cy.get('.Navbarstyles__CartImage-sc-12cp6nt-4').click()
    expect(cy.get('.info > p > span').should('have.text', ' $375 '))
    cy.get('.Navbarstyles__CartImage-sc-12cp6nt-4').click()
  })
})

describe('Resize the website for mobile', () => {
  it('Go to the website', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Resize the window, Click the hambuger icon and should show the sidebar menu, then close', () => {
    cy.viewport(375, 667)
    cy.get('.Navbarstyles__Logo-sc-12cp6nt-1 > svg').click()
    cy.get('[alt="close button"]').click()
  })
})

export {}
