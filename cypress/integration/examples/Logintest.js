// @ts-nocheck
/// <reference types="cypress" />
describe('Valid login', function() {
     
  const un=Cypress.env('user_name');
  //passowrd read from environment variables
  //To set variable run this from your folder-export CYPRESS_password=exportedpassowrdisthis
  const pw=Cypress.env('password');


    beforeEach(function() {
      cy.Navsite("http://executeautomation.com/demosite/Login.html")
      cy.login(un,pw);
    });
  
    it('test login successfult and home page displayed', function() {
      //cy.get('h1').contains("Execute Automation Selenium Test Site");
      cy.get('h1').should("include.text","Execute Automation Selenium Test Site");
      cy.url().should('include', '/index.html?UserName') // => true

    });

    it("click tools",function(){
      cy.get('.active > :nth-child(1)').click();
    })

  });
  