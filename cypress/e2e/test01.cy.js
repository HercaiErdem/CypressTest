
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.amazon.com')

      cy.get('#twotabsearchtextbox').type("Nutella")
      cy.get('#nav-search-submit-button').click()
      cy.wait(2000)
      cy.get('[data-uuid="498c19bd-e5a6-4188-8462-f44a9b165a4e"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    })
  })