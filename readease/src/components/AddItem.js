import React, { useState } from 'react';
import '../css/addItem.css'

function AddItem(props) {
    
    const [card, setCard] = useState({
        title: "",
        author: "",
        rating: ""
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
        props.onAdd(card);
        setCard({
            title: "",
            author: "",
            rating : ""
        })
        event.preventDefault();
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
                    rows="3"
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