import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import EventDetails from "../components/EventDetails/EventDetails";
import ParcipitateEvent from "../components/ParcipitateEvent/ParcipitateEvent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/events"),
            },
            {
                path: "events-details/:id",
                element: <EventDetails></EventDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/events/${params.id}`),
            },
            {
                path: "participate-events/:id",
                element: <ParcipitateEvent></ParcipitateEvent>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/events/${params.id}`),
            },
        ],
    },
]);

export default router;
