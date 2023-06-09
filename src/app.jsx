// import { useState } from "preact/hooks";
import Header from "./header";
import Form from "./form";

export function App() {
	return (
		<>
			<div className="container p-2 border-2 mx-auto flex flex-col justify-center bg-red-50">
				<Header />
				<Form />
			</div>
		</>
	);
}
