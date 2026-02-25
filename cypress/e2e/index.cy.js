/// <reference types="cypress" />

describe('Todolist', () => {

  beforeEach(() => {
    cy.visit('../../src/app/index.html')
  })

  it('ajoute quatre todos', () => {
    const todos = ['Tâche 1', 'Tâche 2', 'Tâche 3', 'Tâche 4']

    todos.forEach(todo => {
      cy.get('input[placeholder="What needs to be done?"]').type(`${todo}{enter}`)
      cy.contains(todo).should('exist') // attend le rendu AlpineJS
    })

    cy.get('div[x-data="todolist()"] div.flex.items-center.justify-between')
      .should('have.length', 4)
  })

  it('supprime la deuxième todo après en avoir ajouté quatre', () => {
    const todos = ['Tâche 1', 'Tâche 2', 'Tâche 3', 'Tâche 4']

    todos.forEach(todo => {
      cy.get('input[placeholder="What needs to be done?"]').type(`${todo}{enter}`)
      cy.contains(todo).should('exist')
    })

    cy.get('div[x-data="todolist()"] div.flex.items-center.justify-between')
      .eq(1)
      .find('button')
      .click()

    cy.get('div[x-data="todolist()"] div.flex.items-center.justify-between')
      .should('have.length', 3)

    cy.get('div[x-data="todolist()"] div.flex.items-center.justify-between').eq(0).should('contain.text', 'Tâche 1')
    cy.get('div[x-data="todolist()"] div.flex.items-center.justify-between').eq(1).should('contain.text', 'Tâche 3')
    cy.get('div[x-data="todolist()"] div.flex.items-center.justify-between').eq(2).should('contain.text', 'Tâche 4')
  })

})