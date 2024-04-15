import TodoTypes from "./todo";

const Local_Storage_key = 'todos';

const todoServices = {
  //get todos
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(Local_Storage_key)
    return todoStr ? JSON.parse(todoStr) : [];
  },

  // add to do
  addTodos: (text: string): TodoTypes => {
    const todos = todoServices.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false }
    const updateTodos = [...todos, newTodo];
    localStorage.setItem(Local_Storage_key, JSON.stringify(updateTodos))
    return newTodo;
  },
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = todoServices.getTodos();

    const updateTodos = todos.map(t => t.id == todo.id ? todo : t)
    localStorage.setItem(Local_Storage_key, JSON.stringify(updateTodos))
    return todo;
  },

  //delete to do
  deleteTodo: (id: number): void => {
    const todos = todoServices.getTodos();
    const updateTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem(Local_Storage_key, JSON.stringify(updateTodos))
  }
}

export default todoServices;