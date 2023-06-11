import Todo from "./todo";

const TodoList = ({ todosList, handleToggle, handleDelete }) => {
	return (
		<div className=" mb-10 w-full self-center bg-red-50 border-2 rounded-md">
			<Todo todos={todosList} handleToggle={handleToggle} handleDelete={handleDelete} />
		</div>
	);
};

export default TodoList;
