import '../css/card.css'
import React, { useState } from "react";

function Card ( props ){
    const [isEdit, setIsEdit] = useState(false)

    function handleClick() {
        props.onDelete(props.id);
    }
    
    function handleEditClick() {
        if (isEdit){
            props.onUpdate();
        }
        setIsEdit(!isEdit);
    }

    return (
        <div className="card">
            {isEdit ? 
            <form>
                <input
                    name = "title"
                    onChange={props.onEdit}
                    value={props.title}
                    placeholder="Title: "
                />
                <textarea
                    name="author"
                    onChange={props.onEdit}
                    value={props.author}
                    placeholder="Author: "
                />
                <textarea
                    name="image"
                    onChange={props.onEdit}
                    value={props.image}
                    placeholder="img URL: "
                />
                <textarea
                    name="rating"
                    onChange={props.onEdit}
                    value={props.rating}
                    placeholder="Rate out of 5: "
                />
                
                <button style = {{fontSize: '20px'}} onClick = {handleEditClick}>Submit</button>
            </form> 
            : 
            <>
                <div className="top">
                    <h2 className="name">{props.title}</h2>
                    <img className="circle-img" src={props.image} alt="bookCover" />
                </div>
                <div className="bottom">
                    <p className="info">Rating: {props.rating} / 5</p>
                    <p className="info">Author: {props.author}</p>
                </div>
                {!props.noEdit && <button onClick = {handleEditClick} style = {{color : 'black'}}>E</button>}
                <button onClick = {handleClick} style = {{color : 'black'}}>X</button>
            </>
            }
            
        </div>
    )
}

export default Card;