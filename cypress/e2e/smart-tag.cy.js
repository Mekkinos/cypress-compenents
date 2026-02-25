/// <reference types="cypress" />

describe('Smart Tag', () => {

  // Avant chaque test : on charge le composant
  beforeEach(() => {
    cy.visit('../../src/compenents/smart-tag.html')
  })

  // 2. Test apparition du tag au survol du bouton "See more"
  it('affiche le tag au survol du bouton "See more"', () => {
    // Vérifie que le tag n’est pas visible au départ
    cy.get('.absolute').should('not.be.visible')

    // Simule le survol
    cy.contains('See more').trigger('mouseover')

    // Le tag doit apparaître
    cy.get('.absolute').should('be.visible')
  })

  // 3. Test disparition du tag à la sortie du survol
  it('fait disparaître le tag à la sortie du survol du bouton "See more"', () => {
    // Survol pour faire apparaître le tag
    cy.contains('See more').trigger('mouseover')
    cy.get('.absolute').should('be.visible')

    // Sortie du survol
    cy.contains('See more').trigger('mouseout')

    // Le tag doit disparaître
    cy.get('.absolute').should('not.be.visible')
  })

})