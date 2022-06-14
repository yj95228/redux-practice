import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// console.log(addToDo(), deleteToDo());
// {type: 'ADD', payload: undefined} {type: 'DELETE', payload: undefined}

// before redux-toolkit
// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case addToDo.type:
// 			console.log(action);
// 			return [{ text: action.payload, id: Date.now() }, ...state];
// 		case deleteToDo.type:
// 			return state.filter(toDo => toDo.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

// after redux-toolkit
const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.push({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) =>
		state.filter(toDo => toDo.id !== action.payload),
});

const store = configureStore({ reducer });

export const actionCreators = {
	addToDo,
	deleteToDo,
};
export default store;
