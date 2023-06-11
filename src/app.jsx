import { useState, useEffect } from "react";
import Header from "./header";
import Form from "./form";
import TodoList from "./todoList";
import Footer from "./footer";

export function App() {
	const [newItem, setNewItem] = useState("");
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("LISTS");
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("LISTS", JSON.stringify(todos));
	}, [todos]);

	// Form submit handler
	const handleSubmit = (e) => {
		e.preventDefault();

		// Check for duplicate todo and not allow it to be added a 2nd time
		const isDuplicate = todos.some((todo) => todo.title === newItem);
		if (isDuplicate) {
			return setNewItem("");
		}

		setTodos((currentTodos) => {
			// Check if new item input box is empty and return current todos, preventing an empty todo from being added to our todo list
			if (!newItem) return currentTodos;
			return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }];
		});
		setNewItem("");
	};

	// Set new item handler
	const handleNewItem = (e) => {
		setNewItem(e.target.value);
	};

	// Toggle todos
	const handleToggle = (id, completed) => {
		// Call the todos state setter and pass in all current todos
		setTodos((currentTodos) => {
			// Map over the current todos array and assign each element with the name todo
			return currentTodos.map((todo) => {
				// Condition to check if the current todo element id, equals the id passed into our function
				if (todo.id === id) {
					// If found, then spread the current todo element and update / pass it the new completed value. By returning it within map we're basically updating the current todo
					return { ...todo, completed };
				}
				// If the id isn't found then we just return the current todo back to currentTodos
				return todo;
			});
		});
	};

	// Delete todo
	const handleDelete = (id) => {
		// Call the todos state setter and pass it all current todos
		setTodos((currentTodos) => {
			// Filter the current todos assigning each element in the array with the name of todo. Then return all elements who's id is not equal to the id passed into our function
			return currentTodos.filter((todo) => todo.id !== id);
		});
	};

	return (
		<>
			<div className="container my-4 p-2 border-2 mx-auto flex flex-col justify-center bg-red-100 max-w-2xl rounded-md">
				<Header />
				<Form handleSubmit={handleSubmit} handleNewItem={handleNewItem} newItem={newItem} />
				<TodoList todosList={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
				<Footer />
			</div>
		</>
	);
}
