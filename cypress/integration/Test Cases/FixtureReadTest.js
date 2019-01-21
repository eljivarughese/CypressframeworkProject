 // @ts-nocheck
 //This is demonstrate how to read data from fixture
 describe('Enter Form Details', function() {

 const un=Cypress.env('user_name');
  //passowrd read from environment variables
  //To set variable run this from your folder-export CYPRESS_password=exportedpassowrdisthis
  const pw=Cypress.env('password');

 beforeEach(function() {
      cy.Navsite("http://executeautomation.com/demosite/Login.html")
      cy.login(un,pw);
      cy.fixture('users.json').as('users');
      
    });



it('test reading from fixture and entering to text field', function() {
  //Reading data from Fixtures file users.json
  cy.fixture('users.json').then((users) => {

    //using data from users file
      cy.get('#FirstName').type(users.FirstName);
      cy.get('#MiddleName').type(users.LastName);

      //cy.url().should('include', '/index.html?UserName') // => true
  })
}) 
 })