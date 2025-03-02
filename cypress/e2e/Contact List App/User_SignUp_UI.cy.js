/// <reference types="cypress" />

describe('Create a user using the UI', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')
  })

  it('Type a name in the first name field', () => {
    cy.fixture('example').then(example => {
      cy.get('[id="firstName"]').type(example.firstName).should('have.value', example.firstName)
    })
  })
})