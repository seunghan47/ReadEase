import React from "react";
import "../css/header.css";
import { Link } from 'react-router-dom';

function Header( props ){
    const isLoggedIn = localStorage.getItem("auth-token");

    const handleLogOut = (event) => {
        localStorage.setItem("auth-token", "");
        window.location.href = '/';
      };

    
    return(
        <header>
        <div>
            <div className="nav-bar">
                <nav>
                    <img
                        src={require('../book.jpg')}
                        alt = "img"
                        id = "logo"
                        style = {{ width:"100px", height: "100px", }}
                    />
                    <ul className="nav-links">
                        <li class="nav-item"><button>Home</button></li>
                        <li class="nav-item"><button>Genre</button></li>
                        <li class="nav-item"><button>Top-Rated</button></li>
                        <li class="nav-item"><button>Recent Release</button></li>
                        <li>{(!isLoggedIn || isLoggedIn == "") && <Link className="link" to = '/Signup'>Sign Up</Link>} </li>
                        <li>{(!isLoggedIn || isLoggedIn == "") && <Link className = "link"to = '/Login'>Log In</Link>} </li>
                        <li>{(isLoggedIn && isLoggedIn != "") && <Link className = "link" onClick={handleLogOut} to = '/'>Log Out</Link>} </li>

                    </ul>
                </nav>
            </div>
            <div>
                <center><h1 style = {{fontSize : '4em'}}>ReadEase</h1></center>
            </div>
           
        </div>
        </header>
    )
}

export default Header;
