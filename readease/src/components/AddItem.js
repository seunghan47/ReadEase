import React, { useState } from 'react';
import '../css/addItem.css'
import axios from 'axios';

function AddItem(props) {
    const isLoggedIn = localStorage.getItem("auth-token")
    const [card, setCard] = useState({
        title: "",
        author: "",
        rating: "",
        image: "",
        userId: localStorage.getItem("userId") 
    })
    
    function handleChange(event) {
        const { name, value } = event.target;

        setCard(prevCard => {
            return {
                ...prevCard,
                [name]: value
            };
        });
    }
    
    function submitCard(event) {
        if (isLoggedIn && isLoggedIn != ""){
            props.onAdd(card)
            console.log(card);
            setCard({
                title: "",
                author: "",
                rating : "",
                image: ""
            })
            
            event.preventDefault();
            
        }
    }

    return (
        <div>
            <form>
                <input
                    name = "title"
                    onChange={handleChange}
                    value={card.title}
                    placeholder="Title: "
                />
                <textarea
                    name="author"
                    onChange={handleChange}
                    value={card.author}
                    placeholder="Author: "
                />
                <textarea
                    name="image"
                    onChange={handleChange}
                    value={card.image}
                    placeholder="img URL: "
                />
                <textarea
                    name="rating"
                    onChange={handleChange}
                    value={card.rating}
                    placeholder="Rate out of 5: "
                />
                
                <button style = {{fontSize: '20px'}}onClick={submitCard}>+</button>
            </form>
        </div>
    )
}
export default AddItem;