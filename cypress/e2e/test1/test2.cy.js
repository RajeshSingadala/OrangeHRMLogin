
import { loginpage } from "../pages/login.page";

describe('testing login page', ()=>{
    let userdata;
    before('Hooks Demo',()=>{
        cy.fixture('login.userdata.json').then((data)=> (userdata=data));
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    
    it("testing the valid credentials",()=>{
            loginpage.enterCorrectUserName(userdata);
            loginpage.enterCorrectPassword(userdata);

    })

    it("testing the valid credentials1",()=>{
            loginpage.enterCorrectUserName(userdata);
            loginpage.enterWrongPassword(userdata);
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible');

        
    })

    it("testing the valid credentials2",()=>{
            loginpage.enterWrongUserName(userdata);
            loginpage.enterCorrectPassword(userdata);
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible');
        
    })

    it("testing the valid credentials3",()=>{
            loginpage.enterWrongUserName(userdata);
            loginpage.enterWrongPassword(userdata);
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible');

    })

    it("Commands Demo",()=>{
            cy.login(userdata);
            cy.get('[type="submit"]').eq(0).click();
    })

})