import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="contact-container">
            <h2>Do you want to shop?</h2>
            <button>
                <Link to={"/catalog"}>YES! =)</Link>
            </button>
        </div>
    );
};

export default Home;