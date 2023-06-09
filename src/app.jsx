import { useState } from "react";
import Header from "./header";
import Form from "./form";
import TodoList from "./todoList";
import Footer from "./footer";

export function App() {
	const [newItem, setNewItem] = useState("");
	const [todos, setTodos] = useState([]);

	// Form submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos((currentTodos) => {
			return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }];
		});
		console.log(todos);
		setNewItem("");
	};
	// Set new item handler
	const handleNewItem = (e) => {
		setNewItem(e.target.value);
	};

	return (
		<>
			<div className="container my-4 p-2 border-2 mx-auto flex flex-col justify-center bg-red-100 max-w-2xl rounded-md">
				<Header />
				<Form handleSubmit={handleSubmit} handleNewItem={handleNewItem} />
				<TodoList todosList={todos} />
				<Footer />
			</div>
		</>
	);
}
