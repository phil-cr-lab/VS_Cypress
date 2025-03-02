describe('Search  with Valid / Invalid data' , () => {
    beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    })
    it('Searches for the text "Apple" and displays results', () => {
     // Enter search data and submit form
      cy.get('[name="search"]').eq(0).type('Apple')
      cy.xpath('//button[text()="Search"]').click()
      // Verify search results
      cy.url().should('include', 'search=Apple')
      cy.contains('Search - Apple').should('be.visible')
      cy.get('.product-layout').should('have.length.gt', 0)
    })
    it('Displays message with no search results for invalid search term', () => {
      // Enter search term that returns no results and submit form
      cy.get('[name="search"]').eq(0).type('abc')
      cy.xpath('//button[text()="Search"]').click()
      // Verify message for no search results
      cy.contains('There is no product that matches the search criteria.').should('be.visible')
    })
   })