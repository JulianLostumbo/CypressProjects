/// <reference types="cypress" />

export class TodoAutomation {

    url='http://todomvc-app-for-testing.surge.sh/';

    visitPage(){
      cy.visit(this.url)
    }

    addNewTodo(todo) {
        cy.get('.new-todo').type(todo + '{enter}')
      }
      
    addSeveralTodos(todoList) {
        todoList.forEach(todo => {
          this.addNewTodo(todo)
        });
      }
      
    createAutomaticTodos(number) {
        for(let index=0; index< number; index++){
          let todoName = 'Task' + (index + 1)
          this.addNewTodo(todoName)
        }
      };
      
      getElement(selector) {
        return cy.get(selector)
      }
      
      get Element(){
        return this.element;
      }
  
      set Element(element){
        this.element=element;
      }
      
      clickTodoTask(number) {
        cy.get(`.todo-list li:nth-child(${number}) .toggle`).click()
      }
      
      clickElementWithContains(elementContains) {
        cy.contains(elementContains).click()
      }
      
      checkElementLenght(elementSelector, lenght) {
        this.getElement(elementSelector).should('have.length', lenght)
      }
}