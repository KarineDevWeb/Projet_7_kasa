import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
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
        element: <NotFound />
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