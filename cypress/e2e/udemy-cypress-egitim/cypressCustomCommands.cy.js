
describe('Custom Commands', () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/login")
    });

    it('Custom Commands Using Examples Invalid Username Invalid Password', () => {
      //  cy.visit("https://automationexercise.com/login")
     // cy.get("input[data-qa='login-email']").type("deneme@gmail.com")
      //  cy.get("input[data-qa='login-password']").type("denemePassword")
      //  cy.get("button[data-qa='login-button']").click()

      cy.login("deneme@gmail.com", "denemePassword") // command.js file'inin icine bilgileri girdik ismine
                                                     // login adini verdigimiz icin login olarak cagirdik
        
    });
    it('Custom Commands Using Examples Valid Username Valid Password', () => {

        cy.login("deneme@abc.com", "SecondPassword") 
          
      });
    
});