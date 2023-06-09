// import { useState } from "preact/hooks";
import Header from "./header";
import Form from "./form";
import TodoList from "./todoList";
import Footer from "./footer";

export function App() {
	return (
		<>
			<div className="container p-2 border-2 mx-auto flex flex-col justify-center bg-red-100 max-w-2xl">
				<Header />
				<Form />
				<TodoList />
				<Footer />
			</div>
		</>
	);
}
