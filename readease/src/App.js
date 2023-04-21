import './css/App.css';
import Header from './components/Header';
import Page from './components/Page'
import SearchBar from './components/AddItem'
import Card from './components/Card'
import AddItem from './components/AddItem'
import React, {useState} from 'react'

let isLoggedIn = true;

function App() {

  const [cards, setCards] = useState([]);

  function addCard(newCard) {
    setCards(prevCards => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
    setCards(prevCards => {
      return prevCards.filter((cardItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header log = {isLoggedIn}/>
      <AddItem onAdd = {addCard} />

      <Card 
        key = {Books[0].id}
        id = {Books[0].id}
        title = {Books[0].name}
        author = {Books[0].author}
        image = {Books[0].image}
        onDelete = {deleteCard}
      />

      <Card 
        key = {Books[1].id}
        id = {Books[1].id}
        title = {Books[1].name}
        author = {Books[1].author}
        image = {Books[1].image}
        onDelete = {deleteCard}
      />

      {cards.map((cardItem, index) => {
        return (
          <Card
            key = {index}
            id = {index}
            title = {cardItem.title}
            author = {cardItem.author}
            image = {cardItem.image}
            onDelete = {deleteCard}
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
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg"
  },
  {
      id: 2,
      name: "Words of Radiance",
      author: "Brandon Sanderson",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1584504944i/29121794.jpg"
  }
];


export default App;
