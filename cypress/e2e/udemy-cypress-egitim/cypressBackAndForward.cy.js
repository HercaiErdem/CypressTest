
describe('Using of Back and Forward', () => {
    it('cypress.io sitesine gidip browserda back forward komutlarini ogrenicegiz', () => {

        cy.visit("https://www.cypress.io")
        
        cy.get("body > astro-island:nth-child(7) > header:nth-child(1) > astro-slot:nth-child(1) > div:nth-child(1) > astro-island:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click() // pricing sayfasina gitti
        cy.title().should("eq", "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

        cy.go("back") // onceki sayfaya dondu
        cy.title().should("eq", "Testing Frameworks for Javascript | Write, Run, Debug | Cypress")
        cy.go("forward") // pring ın saygfasına tekrar gitti
        cy.title().should("eq", "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

    });
    it('back forward komutlarinin ikinci kullanimi', () => {

        cy.visit("https://www.cypress.io")
        cy.get("nav > div > ul > li:nth-child(5) > a ").click() // pricing sayfasina gitti
        cy.title().should("eq", "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

        cy.go(-1) // onceki sayfaya dondu
        cy.title().should("eq", "Testing Frameworks for Javascript | Write, Run, Debug | Cypress")
        cy.go(1) // pring ın saygfasına tekrar gitti
        cy.title().should("eq", "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")
        
    });
    
    
});