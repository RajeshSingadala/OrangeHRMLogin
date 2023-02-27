
describe('Testing Dummy Ticket', ()=>{
        let userdata;
        before("Dummy site Signup", ()=>{
            cy.fixture('dummy.data.json').then((data)=>{userdata=data})
        })
        beforeEach('visiting website', ()=>{
            cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        })
        it('sign up for ticket booking', ()=>{
            cy.signup(userdata);

    })
})