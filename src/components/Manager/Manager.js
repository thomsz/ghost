import React from 'react';
import { TextField, LinearProgress, Box, Typography } from '@material-ui/core';
// import { InputHandler, SubmitHandler } from '../../containers/App';

// interface Props {
// 	onChangeHandler: InputHandler;
// 	input: string;
// 	onKeyDownHandler: SubmitHandler;
// }

const manager = (props) => {
	return (
		<div>
			<h1>Ghost: Boring ToDos</h1>
			<TextField
				id="outlined-basic"
				label="New boring TODO"
				variant="outlined"
				margin="normal"
				fullWidth
				value={props.input}
				onChange={props.onChangeHandler}
				onKeyDown={props.onKeyDownHandler}
			/>

			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress
						variant="determinate"
						value={(100 / props.totalTodos) * props.doneTodos}
					/>
				</Box>
				<Box minWidth={35}>
					<Typography variant="body2" color="textSecondary">
						{props.doneTodos} / {props.totalTodos}
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default manager;
