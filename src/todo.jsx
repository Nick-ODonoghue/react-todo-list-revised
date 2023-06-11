const Todo = ({ todos }) => {
	return (
		<>
			<h2 className=" text-center font-semibold text-lg mt-2 mb-6">ToDo List</h2>
			{todos.length === 0 && <p className="text-center font-medium text-lg">No ToDo's Added</p>}
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id} className="flex justify-between px-4 my-4 max-w-sm mx-auto">
							<div className=" flex gap-4">
								<input type="checkbox" checked={todo.completed} />
								<p className={`self-center font-medium ${todo.completed ? "line-through font-light" : ""}`}>
									{todo.title}
								</p>
							</div>
							<button className="relative px-1 py-1 group ml-2 hover:text-white transition duration-300">
								<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 -translate-y-1 bg-red-500 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
								<span className="absolute inset-0 w-full h-full border-2 border-black rounded-md"></span>
								<span className="relative font-medium ">Delete</span>
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Todo;
