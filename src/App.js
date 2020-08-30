import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

import axios from 'axios';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

        setItems(result.data);
        setLoading(false);
      }
      setTimeout(fetchItems, 500);
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <div className="attribution-wrapper">
        <h4 className="center attribution">
              Made By <a href="https://github.com/jbtalhakhan">Muhammad Talha Rafique</a>
        </h4>
      </div>
    </div>
  );
}

export default App;
