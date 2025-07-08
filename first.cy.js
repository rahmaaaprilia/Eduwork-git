/// <reference types="cypress" />


describe('My Fisrt Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
       
    

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        //Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('rahmanuraprilia.04@gmail.com')
        .should('have.value', 'rahmanuraprilia.04@gmail.com')
    });
});