import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I am on the test page', ()=> {
    cy.visit('/');
});
When('I type in the {string} for user', (user)=> {
    switch (user) {
        case 'admin':
            cy.get('#username').type('admin');
            break
        case 'manager':
            cy.get('#username').type('manager');
            break
        case 'teacher':
            cy.get('#username').type('teacher');
            break
        case 'student':
            cy.get('#username').type('student');
    }

});
When('I type the password', ()=> {
    cy.get('#password').type('sandbox');
});
When('I check the Remember Me', ()=> {
    cy.get('#rememberusername').click();
});
When('I click the login button', ()=> {
    cy.get('#loginbtn').click();
});
Then('I should see the {string} profile', (profile)=> {
    switch (profile) {
        case 'admin':
            cy.get('.userbutton').should('have.text', 'Admin User');
            break
        case 'manager':
            cy.get('.userbutton').should('have.text', 'Max Manager');
            break
        case 'teacher':
            cy.get('.userbutton').should('have.text', 'Terri Teacher');
            break
        case 'student':
            cy.get('.userbutton').should('have.text', 'Sam Student');
    }
});
