import Todo from "./todo";

const TodoList = ({ todosList, handleToggle }) => {
	return (
		<div className=" mb-10 w-full self-center bg-red-50 border-2 rounded-md">
			<Todo todos={todosList} handleToggle={handleToggle} />
		</div>
	);
};

export default TodoList;
