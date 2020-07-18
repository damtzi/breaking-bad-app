import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";

const App: React.FC = () => {
  const [items, setItems] = useState<Character[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
        const characters: Character[] = result.data;
        setItems(characters);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items!} />
    </div>
  );
};

export default App;
