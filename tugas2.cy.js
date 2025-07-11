/// <reference types="cypress" />

describe('Payment Zero Web', () => {
  it('payment berhasil', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');

    // Login
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.get('input[name="submit"]').click();

    // Halaman pembayaran
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html');

    // Custom command
    cy.payment('Apple', 'Credit Card', '100', '2025-07-11', 'Bayar tagihan');
    
    cy.get('#alert_content').should('contain', 'The payment was successfully submitted.');
  });
});
