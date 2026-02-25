/// <reference types="cypress" />
describe('Fenêtre modale', () => {
  beforeEach(() => {
    cy.visit('../../src/compenents/modal.html')
  })

  it('ouvre la fenêtre modale au clic sur Display', () => {
    cy.contains('Display').click()
    cy.get('.fixed').should('be.visible')
  })

  it('ferme la fenêtre modale au clic en dehors de la modale', () => {
    cy.contains('Display').click()
    cy.get('.fixed').click('topLeft')
    cy.get('.fixed').should('not.be.visible')
  })

  it('contient un h2 avec le texte Lorem Ipsum', () => {
    cy.contains('Display').click()
    cy.get('.fixed h2')
      .should('exist')
      .and('contain.text', 'Lorem Ipsum')
  })
})