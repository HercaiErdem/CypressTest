describe('Using of Before After', () => {

    before(() => {
        cy.log("Example of using Before")
        cy.visit("https://automationexercise.com/")
    });
    after(() => {
        cy.log("Example of using After")
    });
    it('Assert the title and the url', () => {
        cy.title().should("eq", "Automation Exercise")
        cy.url().should("include", "automationexercise.com")
        
    });

});