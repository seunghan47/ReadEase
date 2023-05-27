import '../css/Homepage.css';
import Header from './Header';
import Card from './Card'
import AddItem from './AddItem'
import React, {useState, useEffect, useMemo} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';


export default function Homepage() {

  const [cards, setCards] = useState([]);

  useMemo( () => {
    FetchBooks();
  },[]);


  async function FetchBooks (){
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("auth-token");
    if (userId != null && userId != "" && token != null && token != ""){
      const headers = {
        'x-auth-token': token,
      }
      await axios.get("http://localhost:4000/api/books/get/"+ userId,{headers: headers}).then(response => {
        console.log(response);
        setCards(prevCards => {
          return [...prevCards, ...response.data];
        });

      });
    }
  }

  async function addCard(newCard) {
    newCard["userId"] =localStorage.getItem("userId");
    await axios.post('http://localhost:4000/api/books/addBook', newCard).then(res => {
        newCard["_id"] = res.data._id;
        setCards(prevCards => {
          return [...prevCards, newCard];
        });
        });

    
  }

  async function deleteCard(id) {
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("auth-token");
    if (userId != null && userId != "" && token != null && token != ""){
      const headers = {
        'x-auth-token': token,
      }

      let cardToBeDelete = cards[id];
      await axios.delete("http://localhost:4000/api/books/delete/"+ cardToBeDelete._id, {headers: headers}).then(response => {

      });
    }
    setCards(prevCards => {
      return prevCards.filter((cardItem, index) => {
        return index !== id;
      });
    });
  }

  function handleChange(index, event) {
    const { name, value } = event.target;

    let newCardSet = [...cards];
    newCardSet[index][name] = value;
    setCards(newCardSet);

  }
  async function UpdateCard(index, event) {
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("auth-token");
    if (userId != null && userId != "" && token != null && token != ""){
      const headers = {
        'x-auth-token': token,
      }

      let cardToBeUpdated = cards[index];
      await axios.put("http://localhost:4000/api/books/update/"+ cardToBeUpdated._id, cardToBeUpdated, {headers: headers}).then(response => {
      console.log(response);
      });
    }
  }

  return (
    
    <div className="App">
      <Header />
      <AddItem onAdd = {addCard} />

      <Card 
        key = {Books[0].id}
        id = {Books[0].id}
        title = {Books[0].name}
        author = {Books[0].author}
        image = {Books[0].image}
        rating = {Books[0].rating}
        onDelete = {deleteCard}
        noEdit = {true}
      />

      <Card 
        key = {Books[1].id}
        id = {Books[1].id}
        title = {Books[1].name}
        author = {Books[1].author}
        image = {Books[1].image}
        rating = {Books[1].rating}
        onDelete = {deleteCard}
        noEdit = {true}
      />

      {cards && cards.map((cardItem, index) => {
        return (
          <Card
            key = {index}
            id = {index}
            title = {cardItem.title}
            author = {cardItem.author}
            image = {cardItem.image}
            rating = {cardItem.rating}
            onDelete = {deleteCard}
            onEdit = {(e) => handleChange(index, e)}
            onUpdate = {(e) => UpdateCard(index, e)}
            />
          );
      })}

    </div>
  );
}

const Books = [
    {
        id: 1,
        name: "Way of Kings",
        author: "Brandon Sanderson",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg",
        rating: 4.9
    },
    {
        id: 2,
        name: "Words of Radiance",
        author: "Brandon Sanderson",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1584504944i/29121794.jpg",
        rating: 4.6
    }
  ];