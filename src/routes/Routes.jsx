import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import EventDetails from "../components/EventDetails/EventDetails";
import ParcipitateEvent from "../components/ParcipitateEvent/ParcipitateEvent";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Events from "../components/Events/Events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>
                    fetch("https://volunteer-network-qjxu.onrender.com/events"),
            },
            {
                path: "events-details/:id",
                element: (
                    <PrivateRoute>
                        <EventDetails></EventDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://volunteer-network-qjxu.onrender.com/events/${params.id}`
                    ),
            },
            {
                path: "participate-events/:id",
                element: (
                    <PrivateRoute>
                        <ParcipitateEvent></ParcipitateEvent>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://volunteer-network-qjxu.onrender.com/events/${params.id}`
                    ),
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signup",
                element: <Signup></Signup>,
            },
            {
                path: "events",
                element: (
                    <PrivateRoute>
                        <Events></Events>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
