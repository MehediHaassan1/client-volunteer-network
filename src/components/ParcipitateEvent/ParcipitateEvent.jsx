import React from "react";
import { useLoaderData } from "react-router-dom";

const ParcipitateEvent = () => {
    const event = useLoaderData();
    const { _id, title, description, organizer, location, image } = event;

    const handleEventParticipate = (e) => {
        e.preventDefault();
        console.log("hey man are you alright?");
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl text-center my-10 font-bold">
                Participate Event
            </h1>
            <form className="w-2/4 mx-auto" onSubmit={handleEventParticipate}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <div>
                        <label htmlFor="participantsName" className="font-bold">
                            Participants Name{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="participantsName"
                            id="participantsName"
                            placeholder="Participants Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="eventsName" className="font-bold">
                            Events Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="eventsName"
                            id="eventsName"
                            defaultValue={title}
                            readOnly
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="participantsEmail"
                            className="font-bold"
                        >
                            Participants Email{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            id="participantsEmail"
                            defaultValue={`example@gmail.com`}
                            readOnly
                            name="participantsEmail"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="participantsPhone"
                            className="font-bold"
                        >
                            Participants Phone{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Participants Phone"
                            id="participantsPhone"
                            required
                            name="participantsPhone"
                        />
                    </div>
                    <div>
                        <label htmlFor="eventOrganizer" className="font-bold">
                            Event Organizer{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            defaultValue={organizer}
                            id="eventOrganizer"
                            name="eventOrganizer"
                            readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="eventLocation" className="font-bold">
                            Event Location{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            defaultValue={location}
                            id="eventLocation"
                            name="eventLocation"
                            readOnly
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    value="participate"
                    className="uppercase text-sm font-bold bg-blue-200 hover:bg-blue-300 duration-300
                     text-gray-900 p-3 rounded-lg w-full tracking-widest 
                     focus:outline-none focus:shadow-outline my-4 cursor-pointer"
                />
            </form>
        </div>
    );
};

export default ParcipitateEvent;
