
describe('Using of Viewport', () => {
    it('viewport with number', () => {

        cy.viewport(1200,1000)
        cy.visit("https://shopist.io/")

    });
    it('viewport with string', () => {

        cy.viewport("iphone-xr")
        cy.visit("https://shopist.io/")

    });
    it('viewport with string', () => {

        cy.viewport("iphone-8")
        cy.visit("https://shopist.io/")

    });
    it('viewport with string', () => {

        cy.viewport("macbook-16")
        cy.visit("https://shopist.io/")

    });
    it('viewport with string', () => {

        cy.viewport("iphone-se2")
        cy.visit("https://shopist.io/")

    });
    it('viewport with string', () => {

        cy.viewport("samsung-s10")
        cy.visit("https://shopist.io/")

    });
    
});