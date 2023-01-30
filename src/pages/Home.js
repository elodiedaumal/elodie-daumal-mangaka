import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharacterGrid from '../components/CharacterGrid';

import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const urlPage = `?page=${page}`;

      const result = await axios(
        `https://rickandmortyapi.com/api/character/${urlPage}`
      );
      if (page === 1) {
        setItems(() => {
          return [...result.data.results];
        });
      }
      if (page > 1) {
        setItems((oldItems) => {
          return [...oldItems, ...result.data.results];
        });
      }

      setPage((oldPage) => {
        console.log(page);
        return oldPage + 1;
      });
      setIsLoading(false);
    };

    fetchItems();
  }, [page]);
  return (
    <main className='home-section'>
      <SearchForm text={text} setText={setText} />
      <section className='home-card'>
        <CharacterGrid isLoading={isLoading} items={items} text={text} />
      </section>
    </main>
  );
}

export default Home;
