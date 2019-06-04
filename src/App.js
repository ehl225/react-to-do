import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
	this.state = {
		todos: [
			{ description: 'Finish homework', isCompleted: true
},
			{ description: 'Buy groceries', isCompleted: false
},
			{ description: 'Cook dinner', isCompleted: false }
			],
	newTodoDescription: ''
};
}
  handleChange(e) {
	this.setState({ newTodoDescription: e.target.value })
}
  handleSubmit(e) {
	e.preventDefault();
	if (!this.state.newTodoDescription) {return}
	const newTodo = { description: this.state.newTodoDescription,
isCompleted: false};
	this.setState({ todos: [...this.state.todos, newTodo],
newTodoDescription: '' });

}
  toggleComplete(index) {
	const todos = this.state.todos.slice();
	const todo = todos[index];
	todo.isCompleted = todo.isCompleted ? false: true;
	this.setState({ todos: todos});
  }
  deleteToDo(index) {
//	const todos = this.state.todos.slice();
//	const itemtoDelete = todos[index];
//	const NewTodos =[todos-itemtoDelete];
	const todo = this.state.todos[index];
	const newItems = this.state.todos.filter(item => item !==  todo
		);
	this.setState({todos: newItems});
	console.log(newItems);
}
  render () {
    return (

    <div className="App">
	<ul>
	{ this.state.todos.map((todo, index) =>
		<ToDo key={index} description={todo.description}
isCompleted={todo.isCompleted} toggleComplete={ () =>
this.toggleComplete(index)} deleteToDo={() => this.deleteToDo(index)}
/>
	)}

	</ul>
	<form onSubmit= { (e) => this.handleSubmit(e) }>
		<input type="text" value= {this.state.newTodoDescription }
onChange={ (e) => this.handleChange(e) } />
		<input type="submit" />
	</form>
    </div>
  );
}
}
export default App;

