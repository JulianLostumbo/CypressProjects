export class TodoPage {

  taskList = ['Cypress introduction','Cypress preparation', 'Test cypress tools']
  filteringList =  ["All", "Active", "Completed"]
  todosContainer = ".todo-list li"


  navigate(){
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
  }
  
  createTodo(todo){
    cy.get('.new-todo').type(todo+"{enter}")
  }

  clickInElementThatContains(name){
    cy.contains(name).click()
  }

  completeTodoInPosition(number){
    cy.get('.todo-list li:nth-child('+number+') .toggle').click()
  }

  createSeveralTodos(todoList){
    todoList.forEach(todo => {
        this.createTodo(todo)
    });
  }

  createAutomaticTodos(number){
    for(let index=0; index < number; index++){
        let todo= "Task "+(index+1)
        this.createTodo(todo)
    }
  }

  listHaveALengthOfElements(selectorList, n){
    cy.get(selectorList).should('have.length', n)
  }

  clickSeveralElements(ElementList){
    ElementList.forEach( element => {
        this.clickInElementThatContains(element)
    })
  }

}