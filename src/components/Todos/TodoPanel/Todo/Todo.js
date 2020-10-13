import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';

const Todo = (props) => {
	useEffect(() => {
		if (props.editModeInput.initial && props.editMode === props.id) {
			props.setInitialModeInput(props.content);
		}
	});

	return (
		<div style={{ margin: '10px', minHeight: '35px' }}>
			{props.editMode !== props.id ? (
				<div onMouseOver={() => props.editHandler(props.id)}>
					{props.content}
				</div>
			) : (
				<div>
					<TextField
						style={{ width: '100%' }}
						value={props.editModeInput.input}
						onChange={props.editModeInputHandler}
						onKeyDown={props.saveEditHandler}
						onBlur={props.editHandler}
						autoFocus
					/>
				</div>
			)}
		</div>
	);
};

export default Todo;
