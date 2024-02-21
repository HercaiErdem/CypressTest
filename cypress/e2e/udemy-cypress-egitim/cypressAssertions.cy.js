
describe('Using of Cypress Assertions', () => {

    it('Example of Using Assertions', () => {
        cy.visit("https://shopist.io/")
        cy.title().should("eq", "Shop.ist")
        cy.url().should("eq", "https://shopist.io/")
        
    });
    
});