const { it } = require("mocha");

describe('Temel Komutlar', () => {
    it.only('Temel Komutlar cy.visit Kullanimi', () => {     // only dendigi icin describe blogunun icinde sadece bu test kosulacak.
        // Bunu calistirmak istesek hata aliriz cunku birbirinden bagimsiz bir suru cy.visit() komutu var.
        cy.visit("/") // cypress.config.js dosyasinin icine baseUrl tanimlandiysa
        cy.visit("https://example.cypress.oi/") //baseUrl tanimlanmadiysa
        cy.visit("/commands")
        cy.visit({
            url: "https://example.cypress.oi/",
            method: 'GET'
        })

    });
    it.skip('Temel Komutlar cy.title Kullanimi', () => { // skip dedndigi icin bu test kosulmayacak
        cy.title().should("eq", "cypress.oi") // title da tam esitlik olursa dogrular
        cy.title().should("include", "cypress") // title'in icinde "cypress" kelimesi geciyorsa dogrular
        cy.title().should("contain", "cypress") //title'in icinde "cypress" kelimesi geciyorsa dogrular

        });

        it('Temel Komutlar cy.url and cy.location Kullanimi', () => {
            cy.url.should("eq", "https://example.cypress.oi/commands") // cy.title dogrulamasina benziyor, url de tam esitlik olursa dogrular.
            cy.url().should("include", "/commands") // url icinde "commands" kelimesi geciyorsa dogrular

            cy.location("pathname").should("eq", "/commands") //gidilen path dogrulanmis olur
            cy.location("protocol").should("eq", "https") // gidilen protocolu dogrular
            cy.location("hostname").should("eq", "https://example.cypress.oi/commands") // tam esitlikte dogrular
            cy.location("hostname").should("include", "cypress.oi") // url de cypress.oi geciyorsa dogrular
        });

        it('Temel Komutlar cy.get Kullanimi', () => {  // DOM'lar icin(locate alirken)
            cy.get("#button") //dogru kullanimi
            cy.get("#button").as("deneme") // cy.get(@deneme) // button locate ini deneme'ye assign ediyoruz.
            // Baska bi yerde surekli button dememize gerek yok.
            cy.get(a[href="example.cypress.oi"])
            cy.get(".dropdown-menu-list")
            cy.get(div.button)
            cy.get("ul li:first")

        });

        it('Temel Komutlar cy.log Kullanimi', () => {
            cy.log("Bir mesaj") // Console istedigimizi yazdirmak icin kullanilir.

        });


});


