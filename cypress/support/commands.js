
Cypress.Commands.add("login",(userdata)=>{
    cy.get('[name="username"]').type(userdata.username);
    cy.get('[type="password"]').type(userdata.password);
    cy.get('[type="submit"]').eq(0).click();
    cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(0).click();
    cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click();
    cy.get('[class="oxd-select-option"]').eq(2).click();
    cy.get('[placeholder="Type for hints..."]').type('L');
    cy.get('[class="oxd-autocomplete-option"]').contains('Lisa Andrews').click();
    cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(1).click();
    cy.get('[class="oxd-select-option"]').contains('Enabled').click();
    cy.get('[class="oxd-input oxd-input--active"]').eq(1).type(userdata.empusername);
    cy.get('[type="password"]').eq(0).type(userdata.emppassword);
    cy.get('[type="password"]').eq(1).type(userdata.emppassword);
    cy.get('[class="oxd-chip oxd-chip--default user-password-chip --green"]').should('be.visible');
    cy.get('[type="submit"]').eq(0).click();    
})

/* Cypress.Commands.add('verify', (userdata)=>{
    cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click({force: true});
    // cy.get('[class="oxd-select-option"]').eq(2).click();
    // cy.get('[placeholder="Type for hints..."]').type('L');
    // cy.get('[class="oxd-autocomplete-option"]').eq(2).click();
    // cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(1).click({force: true});
    // cy.get('[class="oxd-select-option"]').eq(1).click();
    // cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click({force: true});

})
 */