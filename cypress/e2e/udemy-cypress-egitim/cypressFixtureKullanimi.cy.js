
describe('Using of Cypress Fixture', () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/login")
    });

    it('Cypress Fixture Data Using Examples Invalid Username Invalid Password', () => { 

      cy.fixture("loginData").as("credentials")
      cy.get("@credentials").then((data) => {
       
        cy.login(data.validUsername, data.validPassword) 

      })

      
        
    });

    it('Cypress Fixture Data Using Examples Valid Username Valid Password', () => {

      cy.fixture("loginData").as("credentials")
      cy.get("@credentials").then((data) => {
       
        cy.login(data.invalidUsername, data.invalidPassword) 

      })
    
});

});