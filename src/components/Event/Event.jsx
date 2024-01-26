import React from "react";

const Event = ({ event, handleDeleteEvent }) => {
    const { _id, eventBanner, eventsName, date } = event;
    return (
        <div className="h-[220px] p-5  flex gap-2 rounded-lg">
            <img
                className="w-2/3 rounded-lg"
                src={eventBanner}
                alt={eventsName}
            />
            <div className="relative w-1/3">
                <h1 className="text-2xl font-semibold">{eventsName}</h1>
                <p className="text-xl mt-2 font-bold">{date}</p>
                <button
                    onClick={() => handleDeleteEvent(_id)}
                    className="py-2 px-6 text-lg absolute bottom-0 right-0 hover:bg-blue-200 rounded duration-300 font-semibold"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Event;
