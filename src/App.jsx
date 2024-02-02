import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <div className="Nav">
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
      </div>
      <div className="body">
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
