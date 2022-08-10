/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page2"

// Test suite
describe('Filtering Todo Page', ()=>{
    
    const todoPage = new TodoPage()

    beforeEach(()=>{
        todoPage.visitPage()
        
        todoPage.createSeveralTodos(todoPage.taskList)
        todoPage.completeTodoInPosition(2)
    })
        
    it('should filter "Active" todos', () => { 
        todoPage.clickInElementThatContains('Active')
        todoPage.listHaveALengthOfElements(todoPage.todosContainer, 2)
    })

    it('should filter "Completed" todos', () => {
        todoPage.clickInElementThatContains('Completed')
        todoPage.listHaveALengthOfElements(todoPage.todosContainer, 1)
    })
    
    it('should filter "All" todos', () => {
        todoPage.clickInElementThatContains('All')
        todoPage.listHaveALengthOfElements(todoPage.todosContainer, 3)
    })    
} )