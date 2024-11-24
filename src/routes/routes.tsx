import { createBrowserRouter } from 'react-router-dom';
import ChatPage from '../views/chat/chat';
import PageNotFound from '../views/pageNotFound/pageNotFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ChatPage />,
        errorElement: <PageNotFound />
    }
]);

export default routes;
