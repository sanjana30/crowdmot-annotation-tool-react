import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './guestNavBar.css';
import Link from 'react-router-dom';
import Logo from './images/ut-logo-resized.png'

// export default class GuestNavBar extends Component {
//     render() {
//         return (
//             <div className="nav-wrapper">
//                 <img src="./images/ut-logo-resized.png" alt="UT Austin Logo" className="image-logo"></img>
//                 <Link to="/logout" className="last-nav-link">Log Out</Link>
//                 <a href="#" className="nav-link">Profile</a>
//                 <a href="#" className="nav-link">Help</a>
//                 <a href="#" className="nav-link">About</a>
//             </div>
//         )
//     }
// }

const GuestNavBar = () =>(
        <div className="nav-wrapper">
                <img src={Logo} alt="UT Austin Logo" className="image-logo"></img>
                <Link to="/logout" className="last-nav-link">Log Out</Link>
                <a href="#" className="nav-link">Profile</a>
                <a href="#" className="nav-link">Help</a>
                <a href="#" className="nav-link">About</a>
            </div>
    )


export default hot(module) (GuestNavBar);