import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import About from "./pages/about/About";
import Accommodation from "./pages/accommodation/Accommodation";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/kasa/",
        element: <Home />
    },
    {
        path: "/accommodation/:id",
        element: <Accommodation />
    },
    {
        path: "/about",
        element: <About />
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