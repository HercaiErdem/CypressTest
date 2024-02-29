
describe('Alias, Then, Each and Wrap', () => {
    it('Using Example', () => {

        let itemlenght

        cy.visit("https://shopist.io/")

        cy.get(".navbar-section a").should("be.visible").as("Navbar-Menu") // Alias sample
        cy.get("@Navbar-Menu")
        .then(($el) => {
            itemlenght = $el.leght
        })
        .each(($el, index) =>{
            // cy.log($el.text())
            cy.get("@Navbar-Menu").should("be.visible")
            cy.log('Navgar-Menu ' + index + ": " + $el.text());
        

            if ($el.text().includes("Cart")) { // wrap ornegi
                cy.wrap($el).click()
            
            }
        })

        

    });

});