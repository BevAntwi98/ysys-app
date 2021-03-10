import React from "react";
import "./HeaderComponent.css";
import "../Images/jon.png"


/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!

        */
// TODO - make sure HeaderComponent is expecting the right props (if any)!


const api = {
  books: "https://www.anapioficeandfire.com/api/books",
  houses: "https://www.anapioficeandfire.com/api/houses",
  characters: "https://www.anapioficeandfire.com/api/characters",
};



export const HeaderComponent = ({ query, setQuery }) => {
  
  //function for onchange instead of writing e.target.value
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  //toresetsearch
  const resetQueryField = () => {
    setQuery("");
  };

  //add comment here tomo
  const callSearchFunction = (e) => {
    e.preventDefault();
    query.search(query);
    resetQueryField();
  };

  //fetch function for entering a name 
  const search = (query) => {
    return fetch(`${api.characters}?name=${query}`)
      .then((resp) => {
      return resp.json().then((data) => {
        setQuery("");
        console.log(data);
       });
      })
  };


  //returns searcbar and button 
  return (
    <header className={"header"}>
      <div>
        <input
          value={query}
          type="text"
          className="searchbar"
          placeholder="...Enter character name"
          autoComplete="off"
          onChange={handleSearchInputChange}
        />
         <input
        className="button"
        type="submit"
        value="SEARCH"
        onClick={() => {
          search(query);
        }}
      ></input>
      </div>
      Game of Thrones React App
    </header>
  );
};
