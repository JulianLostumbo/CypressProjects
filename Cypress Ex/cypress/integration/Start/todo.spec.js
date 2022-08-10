/// <reference types="cypress" />

import {TodoAutomation} from '../POM/todo-page' //more recommended

import {addNewTodo, addSeveralTodos, createAutomaticTodos, getElement, clickTodoTask, clickElementWithContains, checkElementLenght} from '../POM/todo-file'

describe('My first automated tests', () => {
      
  beforeEach(()=>{        

    cy.visit('http://todomvc-app-for-testing.surge.sh/')

  })

  it('a new task should be created', () => {
    cy.get('.new-todo').type("New Task{enter}")
    cy.get('label').should('have.text', 'New Task')
  })
  
  it('should be visible the new task to the list (with contains())', () => {
      cy.get('.new-todo').type("Cypress preparation{enter}")
      cy.contains('Cypress preparation').should('be.visible')
    })

  it('should be visible the new task to the list (with get())', () => {
      cy.get('.new-todo').type("Cypress preparation{enter}")
      cy.get('label').should('be.visible')
    })
     
  it('should be completed one task to the list', () => {

      cy.get('.new-todo').type("New task{enter}")
      cy.get('.toggle').click()
      cy.get(':nth-child(3) > a').click()
      cy.get('label').should('have.text', 'New task')
      cy.contains('New task').should('have.css', 'text-decoration-line', 'line-through')
      })

  it('Should be able to remove the completed task from the list', () => {
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.toggle').should('not.be.checked')
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        cy.get('.clear-completed').click()
        cy.get('ul.todo-list').should('not.have.descendants', 'li')

      })

})

describe('Testing with clases', () => {
      
    const todoPage = new TodoAutomation()
  
    beforeEach(()=>{   

      cy.visit(todoPage.url)

      const taskList = ['Intro', 'Preparation', 'Tools']

      
      todoPage.addSeveralTodos(taskList)

      todoPage.clickTodoTask(2)

    })
    

    it('should filter "Active" todos', () => {

      clickElementWithContains('Active')
  
      checkElementLenght('.todo-list li', 2)
  
    })
      
    it('should filter "Completed" todos', () => {

      todoPage.clickElementWithContains('Completed')

      todoPage.checkElementLenght('.todo-list li', 1)

    }) 
    
    it('should filter "All" todos', () => {

      todoPage.clickElementWithContains('All')

      todoPage.checkElementLenght('.todo-list li', 3)

    }) 
  
    it('should add several todos', () =>{

      let numberOfTodos = 15
    
      todoPage.createAutomaticTodos(numberOfTodos)

      todoPage.checkElementLenght('.todo-list li', numberOfTodos + 3) //3 is the number of Todos initially added
    }) 

})
  