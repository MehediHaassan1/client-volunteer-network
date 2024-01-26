import React from "react";
import { useLoaderData } from "react-router-dom";
import EventCard from "../EventCard/EventCard";

const Home = () => {
    // const colors = ["red", "green", "blue", "yellow", "purple"];
    const events = useLoaderData();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        console.log(searchValue);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-4xl lg:text-5xl uppercase font-bold my-10">
                I grow by helping people in need.
                </h1>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Type here to search"
                        className="input input-bordered w-full max-w-xs mx-2"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="input input-bordered bg-orange-300 max-w-xs mx-2 font-bold rounded uppercase "
                    />
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-10 my-10">
                {/* {
                    colors.map((color, index) => {
                        
                    })
                } */}
                {
                    events.map(event => <EventCard key={event._id} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Home;
