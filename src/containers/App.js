import React, { useState } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Manager from '../components/Manager/Manager';
import Todos from '../components/Todos/Todos';
import { isNumber } from 'util';

const App = () => {
	const [input, setInput] = useState('');
	const [todos, setTodo] = useState([]);
	const [doneTodos, setDoneTodos] = useState(0);
	const [lastId, setId] = useState(0);
	const [editMode, setEditMode] = useState(null);
	const [editModeInput, setEditModeInput] = useState({
		input: '',
		initial: true,
	});

	const inputHandler = (event) => {
		setInput(event.currentTarget.value);
	};

	const submitHandler = (event) => {
		if (event.key === 'Enter' && input !== '') {
			const id = lastId + 1;
			todos.unshift({ todo: input, done: false, id: id });
			setTodo(todos); // Save Todo
			setId(id); // Set unique incrementing ID
			setInput(''); // Clear input field
		}
	};

	const doneToggle = (id) => {
		const todo = todos.find((todo) => todo.id === id); // Get todo object
		const index = todos.findIndex((todo) => todo.id === id); // Get todo index

		todo.done ? setDoneTodos(doneTodos - 1) : setDoneTodos(doneTodos + 1);

		todos[index].done = !todo.done; // toggle
		setTodo([...todos]); // set
	};

	const editHandler = (id) => {
		console.log('editHandler');

		if (editMode === id) {
			setEditMode(null);
		} else {
			if (editMode !== null) {
				saveEdit(); // Save previous edit
			}

			isNumber(id) ? setEditMode(id) : setEditMode(null);
		}
	};

	const deleteHandler = (id) => {
		const todosArr = [...todos];
		const todoIndex = todosArr.findIndex((todo) => todo.id === id);

		if (todos[todoIndex].done) {
			setDoneTodos(doneTodos - 1);
		}

		todosArr.splice(todoIndex, 1);
		setTodo([...todosArr]); // Save

		//  ? setDoneTodos(doneTodos - 1) : setDoneTodos(doneTodos + 1);
	};

	const saveEditHandler = (event) => {
		if (event.key === 'Enter' && editModeInput !== '') {
			saveEdit();
		}
	};

	const saveEdit = () => {
		const todosArr = [...todos];
		const todoIndex = todosArr.findIndex((todo) => todo.id === editMode);
		const todo = todosArr[todoIndex];

		todosArr[todoIndex] = { ...todo, todo: editModeInput.input };

		setTodo(todosArr); // Save Todos
		setEditModeInput({ input: '', initial: true }); // Clear input field
		setEditMode(null);
	};

	const editModeInputHandler = (event) => {
		setEditModeInput({ input: event.currentTarget.value, initial: false });
	};

	const setInitialModeInput = (input) => {
		setEditModeInput({ input: input, initial: false });
	};

	return (
		<div className="App">
			<Container maxWidth="sm" style={{ paddingTop: '50px' }}>
				<Manager
					totalTodos={todos.length}
					doneTodos={doneTodos}
					input={input}
					onChangeHandler={inputHandler}
					onKeyDownHandler={submitHandler}
				/>
				<Todos
					todos={todos}
					doneToggle={doneToggle}
					editHandler={editHandler}
					deleteHandler={deleteHandler}
					saveEditHandler={saveEditHandler}
					editModeInputHandler={editModeInputHandler}
					editModeInput={editModeInput}
					editMode={editMode}
					setInitialModeInput={setInitialModeInput}
				/>
			</Container>
		</div>
	);
};

export default App;

/*

1. Press ENTER to add a new TODO
2. 

*/
