import '../css/card.css'
import Books from './Books';
import React from "react";

function Card ( props ){
    function handleClick() {
        props.onDelete(props.id);
    }
    
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.title}</h2>
                <img className="circle-img" src={props.image} alt="bookCover" />
            </div>
            <div className="bottom">
                <p className="info">{props.author}</p>
                <p className="info">{props.rating}</p>
            </div>
            <button onClick = {handleClick} style = {{color : 'black'}}>X</button>
        </div>
    )
}

export default Card;