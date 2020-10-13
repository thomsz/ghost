import React from 'react';
import { Card, Button, CardContent, CardActions } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Todo from './Todo/Todo';
import './TodoPanel.css';

const todo = (props) => {
	return (
		<Card variant="outlined" className="todo-card">
			<CardContent>
				<Todo
					id={props.id}
					editMode={props.editMode}
					editModeInput={props.editModeInput}
					editModeInputHandler={props.editModeInputHandler}
					saveEditHandler={props.saveEditHandler}
					editHandler={props.editHandler}
					content={props.content}
					setInitialModeInput={props.setInitialModeInput}
				/>
			</CardContent>
			<CardActions>
				<Button
					variant="outlined"
					onClick={() => props.doneToggle(props.id)}
				>
					{props.isDone ? 'Undone' : 'Done'}
				</Button>
				<Button onClick={() => props.deleteHandler(props.id)}>
					<DeleteIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

export default todo;
