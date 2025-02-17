/// <reference types="cypress" />

describe('Login with an existing user and get its information', () => {
    it('Submits the user information and receives a token', () => {
      cy.request('POST', "https://thinking-tester-contact-list.herokuapp.com/users/login", {
        "email":"johndodo@test.com",
        "password":"test123"
      }).should((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.have.property('token')
        expect(response.body.token).to.match(new RegExp("^[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.?[A-Za-z0-9-_.+/=]*$"))        
      }).then((response) => {
        Cypress.env('token', response.body.token)
      })
    })
  
    it('Gets the user information using a token', () => {
      cy.request({
        url:'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          Authorization: 'Bearer ' + Cypress.env('token')
        }})
      .should((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.have.property('firstName')
        expect(response).property('body').to.have.property('lastName')
        expect(response).property('body').to.have.property('email')
        expect(response.body.email).to.equal("johndodo@test.com")
      })
    })
  })