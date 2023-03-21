import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Accommodation from "./pages/accommodation/Accommodation";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/kasa/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/accommodation/:id",
        element: <Accommodation />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
]);

function App() {
        return (
            <>
                <RouterProvider router={router}/>
            </>
        );
}

export default App;