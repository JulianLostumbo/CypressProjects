/// <reference types="cypress" />

export const addNewTodo = todo => {
    cy.get('.new-todo').type(todo + '{enter}')
  }
  
export const addSeveralTodos = todoList => {
    todoList.forEach(todo => {
      addNewTodo(todo)
    });
  }
  
export const createAutomaticTodos = number =>{
    for(let index=0; index< number; index++){
      let todoName = 'Task' + (index + 1)
      addNewTodo(todoName)
    }
  };
  
export const getElement = (selector) => {
    return cy.get(selector)
  }
  
export const clickTodoTask = number => {
    cy.get(`.todo-list li:nth-child(${number}) .toggle`).click()
  }
  
export const clickElementWithContains = (elementContains) => {
    cy.contains(elementContains).click()
  }
  
export const checkElementLenght = (elementSelector, lenght) => {
    getElement(elementSelector).should('have.length', lenght)
  }