describe('Login and Subscribe', () => {
    it('Logs in and subscribes to newsletter', () => {
      // Visit the site
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
   
   
   // Click the login button
    cy.get('[value="Login"]').click()
   // Enter valid email and password
   cy.get('#input-email').type('lambdatestnew@yopmail.com')
   cy.get('#input-password').type('Lambda123')
   
   
   // Click the login button
   cy.get('[value="Login"]').click()
   
   
   // Verify successful login
   cy.url().should('include', 'index.php?route=account/account')
   cy.contains('My Account').should('be.visible')
   
   
   // Subscribe to newsletter
    cy.contains('Newsletter').click()
    cy.get('#input-newsletter-yes').forceClick()
    cy.get('[value="Continue"]').click()
   
   
    // Wait for subscription success message
      cy.get('.alert-success').should('contain', 'Success: Your newsletter subscription has been successfully updated!')
    })
   })