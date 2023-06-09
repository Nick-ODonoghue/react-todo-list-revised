import React from "react";

const Form = () => {
	return (
		<div className=" my-10 container max-w-md mx-auto">
			<form action="" className="flex flex-col mx-auto justify-center">
				<label htmlFor="item" className="">
					New Item
				</label>
				<input
					type="text"
					id="item"
					placeholder="Add New Item"
					className=" mb-6 max-w-md bg-red-300 border-black p-2 rounded-md appearance-none border-2 text-red-400"
				/>
				<button className="relative py-3 font-bold text-black group">
					<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
					<span className="absolute inset-0 w-full h-full border-2 border-black"></span>
					<span className="relative">Add Item</span>
				</button>
			</form>
		</div>
	);
};

export default Form;
