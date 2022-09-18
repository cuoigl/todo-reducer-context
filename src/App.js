import { useRoutes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

function App() {
    return useRoutes([
        {
            path: '/',
            element: <LoginPage />,
        },
        {
            path: '/home',
            element: <TodoPage />,
        },
    ]);
}

export default App;
