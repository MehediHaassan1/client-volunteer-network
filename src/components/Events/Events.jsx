import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthProvider";
import Event from "../Event/Event";
import Swal from "sweetalert2";

const Events = () => {
    const { user } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState([]);
    const url = `http://localhost:5000/participant-events?email=${user.email}`;
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem(
                    "volunteer-network-web-access-token"
                )}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUserEvents(data);
            });
    }, [url]);

    const handleDeleteEvent = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/participant-events/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your event has been deleted.",
                                icon: "success",
                            });

                            const remaining = userEvents.filter(
                                (event) => event._id !== _id
                            );
                            setUserEvents(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl text-center my-10 font-bold">
                Events
            </h1>
            <div className="px-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 my-10">
                {userEvents.map((event) => (
                    <Event
                        key={event._id}
                        event={event}
                        handleDeleteEvent={handleDeleteEvent}
                    ></Event>
                ))}
            </div>
        </div>
    );
};

export default Events;
