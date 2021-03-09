import React, { useState } from "react";
import TodoForm from "./todo-form.js";
import TodoAdd from "./todo-add.js";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	const addToDo = todo => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos(prev =>
			prev.map(item => (item.id === todoId ? newValue : item))
		);
	};

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id);

		setTodos(removeArr);
	};

	const completeTodo = id => {
		let updateTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}

			return todo;
		});
		setTodos(updateTodos);
	};

	return (
		<div>
			<div className="container todoTopClass">
				<div className="row">
					<h1>LISTA DE TAREAS</h1>
				</div>
			</div>

			<div className="container inputTodoClass">
				<TodoForm onSubmit={addToDo} />
			</div>
			<div className="container todoListClass">
				<div className="row d-flex flex-column">
					<div className="list-group">
						<TodoAdd
							todos={todos}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							updateTodo={updateTodo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
