/// <reference types="cypress" />

describe('Create a user using the UI', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')
  })

  it('Type a name in the first name field', () => {
    cy.get('[id="firstName"]').type("Tester").should('have.value', "Tester")
  })

})