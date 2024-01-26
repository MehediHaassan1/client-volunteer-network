import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const EventDetails = () => {
    const event = useLoaderData();
    const { _id, title, description, organizer, location, image } = event;
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h1 className="text-4xl lg:text-5xl my-5">{title}</h1>
            <img src={image} alt={title} />
            <p className="mt-5 text-lg">
                <b>Description : </b>
                {description}
            </p>
            <p className="my-1 text-lg">
                <b>Organizer : </b>
                {organizer}
            </p>
            <p className="mt-1 mb-5 text-lg">
                <b>Location : </b>
                {location}
            </p>
            <Link
                className="group inline-block"
                to={`/participate-events/${_id}`}
            >
                <button className="hover:tracking-widest duration-300 font-bold bg-yellow-200 px-4 py-2 rounded hover:bg-yellow-300 flex items-center gap-2 ">
                    Participate{" "}
                    <span className="hidden group-hover:inline-block">
                        <FaArrowRight />
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default EventDetails;
