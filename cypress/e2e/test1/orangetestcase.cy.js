describe('testing login page', ()=>{
    let userdata;
    before('Hooks Demo',()=>{
        cy.fixture('login.userdata.json').then((data)=> (userdata=data));
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    it('adding admin', ()=>{
    cy.login(userdata);

    })
})