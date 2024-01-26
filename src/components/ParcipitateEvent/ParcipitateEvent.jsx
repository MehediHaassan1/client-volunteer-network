import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../context/AuthProvider";

const ParcipitateEvent = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const event = useLoaderData();
    const { _id, title, description, organizer, location, image } = event;

    const handleEventParticipate = (e) => {
        e.preventDefault();
        const form = e.target;
        const participantsName = form.participantsName.value;
        const eventsName = form.eventsName.value;
        const date = form.date.value;
        const participantsEmail = form.participantsEmail.value;
        const participantsPhone = form.participantsPhone.value;
        const eventOrganizer = form.eventOrganizer.value;
        const eventLocation = form.eventLocation.value;
        const eventBanner = image;
        const participantInfo = {
            participantsName,
            eventsName,
            date,
            participantsEmail,
            participantsPhone,
            eventOrganizer,
            eventLocation,
            eventBanner,
        };

        if (isNaN(participantsPhone) || participantsPhone.length < 10) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: "Please enter correct phone number!",
            });
            return;
        }

        fetch("http://localhost:5000/participant-events", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(participantInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your event has been saved",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    navigate("/");
                }
            });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl text-center my-10 font-bold">
                Participate Event
            </h1>
            <form
                className="lg:w-2/4 mx-auto"
                onSubmit={handleEventParticipate}
            >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <div className="md:col-span-2">
                        <label htmlFor="participantsName" className="font-bold">
                            Participants Full Name{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="participantsName"
                            id="participantsName"
                            readOnly
                            required
                            defaultValue={user?.displayName}
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
                        <label htmlFor="date" className="font-bold">
                            Date <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="date"
                            name="date"
                            id="date"
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
                            defaultValue={user.email}
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
