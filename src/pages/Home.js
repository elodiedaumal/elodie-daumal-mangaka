import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharacterGrid from '../components/CharacterGrid';

import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=`
      );

      console.log(result.data.results);

      //we've got the data, so we put setIsLoading as false.
      setItems(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  return (
    <main>
      <SearchForm text={text} setText={setText} />
      <CharacterGrid isLoading={isLoading} items={items} text={text} />
    </main>
  );
}

export default Home;
