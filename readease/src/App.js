import './App.css';
import Header from './components/header';


let isLoggedIn = false;

function App() {


  return (
    <div className="App">
      <Header log = {isLoggedIn}/>
      <page />
      <section /> 
    </div>
  );
}

export default App;
