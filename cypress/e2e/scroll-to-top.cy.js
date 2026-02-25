/// <reference types="cypress" />

describe('Scroll to Top', () => {

  beforeEach(() => {
    cy.visit('../../src/compenents/scroll-to-top.html')
  })

  it('affiche le bouton scroll-to-top lorsqu’on scrolle vers le bas', () => {
    cy.get('.fixed button').should('not.be.visible')

    cy.window().scrollTo(0, 500)
    
    cy.get('.fixed button').should('be.visible')
  })

  it('retourne en haut et fait disparaître le bouton au clic', () => {
    cy.window().scrollTo(0, 500)
    cy.get('.fixed button').should('be.visible')

    cy.get('.fixed button').click()

    cy.window().its('scrollY').should('eq', 0)

    cy.get('.fixed button').should('not.be.visible')
  })

})