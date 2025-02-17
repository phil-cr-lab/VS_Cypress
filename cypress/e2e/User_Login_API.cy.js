/// <reference types="cypress" />

describe('Login an existing user using the API', () => {
    it('Logs in a user', () => {
      cy.request('POST', "https://thinking-tester-contact-list.herokuapp.com/users/login", {
        "email":"johndodo@test.com",
        "password":"test123"
      }).then((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.have.property('token')
        expect(response.body.token).to.match(new RegExp("^[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.?[A-Za-z0-9-_.+/=]*$"))
      })
    })
  
  })