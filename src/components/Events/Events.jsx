import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthProvider";
import Event from "../Event/Event";

const Events = () => {
    const { user } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState([]);
    const url = `http://localhost:5000/participant-events?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setUserEvents(data);
            });
    }, [url]);
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl text-center my-10 font-bold">
                Events
            </h1>
            <div className="px-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 my-10">
                {userEvents.map((event) => (
                    <Event key={event._id} event={event}></Event>
                ))}
            </div>
        </div>
    );
};

export default Events;
