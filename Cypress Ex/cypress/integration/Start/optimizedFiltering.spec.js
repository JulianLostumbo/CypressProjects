/// <reference types="cypress" />

// variables
const taskList = ['Cypress introduction','Cypress preparation', 'Test cypress tools']
const filteringList =  ["All", "Active", "Completed"]
const todosContainer = ".todo-list li"


// functions
const clickInElementThatContains = function(name){
    cy.contains(name).click()
}

const createTodo= function(todo){
    cy.get('.new-todo').type(todo+"{enter}")
}

const createSeveralTodos= function(todoList){
    todoList.forEach(todo => {
        createTodo(todo)
    });
}

const createAutomaticTodos= function(number){
    for(let index=0; index < number; index++){
        let todo= "Task "+(index+1)
        createTodo(todo)
    }
}

const listHaveALengthOfElements = (selectorList, n) => {
    cy.get(selectorList).should('have.length', n)
 }

 const completeTodoInPosition = function(number){
    cy.get('.todo-list li:nth-child('+number+') .toggle').click()
  }

const clickSeveralElements = (ElementList) => {
    ElementList.forEach( element => {
        clickInElementThatContains(element)
     })
 }


// Test suite
describe('Filtering Todo Page', ()=>{

    beforeEach(()=>{        
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        createSeveralTodos(taskList)
        
        //cy.get('.todo-list li:nth-child(2) .toggle').click()
        completeTodoInPosition(2)
    })
        
    it('should filter "Active" todos', () => { 
        clickInElementThatContains('Active')
        //cy.get('.todo-list li').should('have.length', 2)
        listHaveALengthOfElements(todosContainer, 2)
    })

    it('should filter "Completed" todos', () => {
        clickInElementThatContains('Completed')
        //cy.get('.todo-list li').should('have.length', 1)
        listHaveALengthOfElements(todosContainer, 1)
    })
    
    it('should filter "All" todos', () => {
        clickInElementThatContains('All')
        //cy.get('.todo-list li').should('have.length', 3)
        listHaveALengthOfElements(todosContainer, 3)
    })    
} )