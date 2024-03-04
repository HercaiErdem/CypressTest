
const { faker } = require("@faker-js/faker")

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.person.firstName()

describe('Using of FakerJS', () => {

    it('Testing sample with fakerjs', () => {
        cy.visit("https://automationexercise.com/login")

        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()
    });
    
});