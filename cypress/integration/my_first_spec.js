/// <reference types="Cypress"/>

describe('My first test suite', () =>{
    it('test url works', () => {
        cy.visit('http://react-redux.realworld.io/#/?_k=zp0v70')
    })
    it('sign in test', () => {
        cy.contains('a.nav-link','Sign in').click()
        cy.get(':nth-child(1) > .form-control').type('milovanpocek@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('123')
        cy.get('.btn').click()


    })
})