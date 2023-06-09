const Todo = ({ todos }) => {
	return (
		<>
			{todos.map((todo) => {
				return <p>{todo.title}</p>;
			})}
		</>
	);
};

export default Todo;
