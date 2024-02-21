
describe('Using of BeforeEach AfterEach', () => {

    beforeEach(() => {
        cy.log("Example of using BeforeEach")
        cy.visit("https://automationexercise.com/")
    });
    afterEach(() => {
        cy.log("Example of using AfterEach")
    });
    it('Assert the title', () => {
        cy.title().should("eq", "Automation Exercise")
        
        
    });
    it('Assert the url', () => {
        cy.url().should("eq", 'https://automationexercise.com/')
        
    });

    it('Assert the hostname', () => {
        cy.location("hostname").should("include", 'automation')
        
    });

    
});