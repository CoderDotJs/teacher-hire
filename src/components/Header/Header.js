import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div id="header">
                <header>
                    <img src={logo} alt="" />
                    <nav>
                <a href="/jobs">Jobs</a>
                <a href="/courses">Courses</a>
                <a href="/students">Students</a>
                <button className="btn">Login</button>
                <button className="btn">Sign Up</button>
                 </nav>
                </header>
            </div>
            <div className="banner">
                <div id="banner">
                <h1>Start recruiting great teachers</h1>
                <p>Your students' success depends on who’s at the front of the classroom. Find the amazing teachers they deserve here at Teach Away.</p>
                <h3>Total Budget: 100 Million</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;