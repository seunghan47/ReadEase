import React from "react";
import "../css/header.css";

function Header( props ){
    return(
        <header>
        <div>
            <div className="nav-bar">
                <nav>
                    <ul className="nav-links">
                        <li class="nav-item"><button>Home</button></li>
                        <li class="nav-item"><button>Genre</button></li>
                        <li class="nav-item"><button>Top-Rated</button></li>
                        <li class="nav-item"><button>Recent Release</button></li>
                        <li class="sign">{!props.log ? <button>Sign In</button> : <button> Sign Out</button>} </li>
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