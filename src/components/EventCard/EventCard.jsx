import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
    const { _id, title, image } = event;
    const navigate = useNavigate();

    const handleEventDetails = (id) => {
        navigate(`events-details/${id}`);
    };

    return (
        <div
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleEventDetails(_id)}
        >
            <img src={image} alt="image" className="h-60 w-full object-cover" />
            <h4 className="py-4 text-center font-bold bg-blue-300">{title}</h4>
        </div>
    );
};

export default EventCard;
