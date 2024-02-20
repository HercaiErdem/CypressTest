describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.ozersoylar.gricreative.com/')

    cy.get(".home-banner .button").click()
  })
})