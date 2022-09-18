import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELELTE_TODO,
    CHECK_TODO,
} from './constants';

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const deleteTodo = (id) => ({
    type: DELELTE_TODO,
    id,
});

export const checkTodo = (id) => ({
    type: CHECK_TODO,
    id,
});
