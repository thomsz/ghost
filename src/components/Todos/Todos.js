import React from 'react';
import TodoPanel from './TodoPanel/TodoPanel';

const todos = (props) => {
	return (
		<div>
			{props.todos.map((todo) => {
				return (
					<TodoPanel
						key={todo.id}
						id={todo.id}
						content={todo.todo}
						doneToggle={props.doneToggle}
						isDone={todo.done}
						editHandler={props.editHandler}
						deleteHandler={props.deleteHandler}
						saveEditHandler={props.saveEditHandler}
						editModeInputHandler={props.editModeInputHandler}
						editModeInput={props.editModeInput}
						editMode={props.editMode}
						setInitialModeInput={props.setInitialModeInput}
					/>
				);
			})}
		</div>
	);
};

export default todos;
