
describe('First Test With Cypress', () => {
    it('First Test', () => {
        cy.visit("https://automationexercise.com/") // cypress.config.js file'inda baseUrl tanimlanmamis
        cy.title().should("eq", "Automation Exercise")
        cy.url().should("eq", "https://automationexercise.com/")

    });
it('Second Test', () => {
    cy.visit("https://automationexercise.com/")
    cy.title().should("include", "Automation")
    cy.url().should("include", "automationexercise.com/")


});


});