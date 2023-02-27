class LoginPage {
    enterCorrectUserName(data){
     cy.get('[name="username"]').should('be.visible').type(data.username);

    }
    enterCorrectPassword(data){
    cy.get('[type="password"]').type(data.password)
    }

    enterWrongUserName(data){
        cy.get('[name="username"]').type(data.wrongusername);
    }

    enterWrongPassword(data){
    cy.get('[type="password"]').type(data.wrongpassword)
    }

}

export const loginpage = new LoginPage