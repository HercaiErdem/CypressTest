
describe('Cypress Locators', () => {

    it('Locate Html Element ', () => {
        cy.get('#user-name') // locate id
        cy.get(".login-box") // locate class
        cy.get("input") // locate tag (if only one locater)
        cy.get("input[name='user-name']") // locate attribute
        cy.get("a:contains('login')") // locate the include text element
        cy.get('a').contains("login")

    });
});