import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELELTE_TODO,
    CHECK_TODO,
} from './constants';

const initState = {
    user: [
        {
            email: 'admin@gmail.com',
            password: 'admin',
        },
    ],
    todos: [
        {
            id: '1',
            title: 'Study React',
            status: false,
        },
    ],
    todoInput: '',
};

let nextId = 1;

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextId++,
                        title: action.payload,
                        status: false,
                    },
                ],
            };

        case DELELTE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => todo.id !== action.id)],
            };

        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, status: !todo.status }
                        : todo,
                ),
            };

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
