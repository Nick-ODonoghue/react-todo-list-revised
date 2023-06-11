const Form = ({ handleSubmit, handleNewItem, newItem }) => {
	return (
		<div className=" my-10 container max-w-md mx-auto">
			<form onSubmit={handleSubmit} className="flex flex-col mx-auto justify-center">
				<label htmlFor="item" className=" font-semibold">
					New Item
				</label>
				<input
					type="text"
					id="item"
					className=" mb-6 max-w-md bg-red-300 border-black p-2 rounded-md appearance-none border-2 focus:bg-red-200"
					onChange={handleNewItem}
					value={newItem}
				/>
				<button type="submit" className="relative px-8 py-3 font-bold text-black group self-center ">
					<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
					<span className="absolute inset-0 w-full h-full border-2 border-black rounded-md"></span>
					<span className="relative">Add Item</span>
				</button>
			</form>
		</div>
	);
};

export default Form;
