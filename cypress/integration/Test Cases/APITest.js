 // @ts-nocheck
 //API test -GET Mthode
 describe('API Test', function() {
 beforeEach(function() {
    const un=Cypress.env('user_name');
    //passowrd read from environment variables
    //To set variable run this from your folder-export CYPRESS_password=exportedpassowrdisthis
    const pw=Cypress.env('password');
    cy.Navsite("http://executeautomation.com/demosite/Login.html")
    cy.login(un,pw);
 
    
        cy.server();
        cy.request({
          method: 'GET',
          url : 'https://reqres.in/api/users/3',
          
          headers : {
            'Content-Type': 'json'
          }
        }).then(function (response) {
          console.log(response);
          expect(response.status).to.eq(200);
          //var jsonData = JSON.parse(responseBody);
          const FN= response.body.data.first_name;
          expect(FN).to.eq('Emma');
          //Share First name as name so we can use it in other tests
          cy.wrap(FN).as('FirstName');
         
          
        });
    });
          it('test reading from API and entering to text field', function() {
            //Reading data from Fixtures file users.json
            cy.fixture('users.json').then((users) => {
          
              //using data from response file
              
                cy.get('#FirstName').type(this.FirstName);
                //cy.get('#MiddleName').type(FirstName);
          
                //cy.url().should('include', '/index.html?UserName') // => true
            
        });
      });
    });

 