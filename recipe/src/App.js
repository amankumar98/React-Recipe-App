import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "f9e25ce0";
  const APP_KEY = "e7a89de75b7b8f1f8ce7a0a83170f6db";


  const [recipes, setRecipes] = useState([]);

  useEffect (() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipes => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
