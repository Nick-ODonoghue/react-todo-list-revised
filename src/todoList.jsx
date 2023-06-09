import Todo from "./todo";

const TodoList = ({ todosList }) => {
	return (
		<div className=" mb-10 w-full self-center bg-red-50 border-2 rounded-md">
			<Todo todos={todosList} />
		</div>
	);
};

export default TodoList;
