import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharacterGrid from '../components/CharacterGrid';

import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [items4, setItems4] = useState([]);
  const [items5, setItems5] = useState([]);
  const [items6, setItems6] = useState([]);
  const [items7, setItems7] = useState([]);
  const [items8, setItems8] = useState([]);
  const [items9, setItems9] = useState([]);
  const [items10, setItems10] = useState([]);
  const [items11, setItems11] = useState([]);
  const [items12, setItems12] = useState([]);
  const [items13, setItems13] = useState([]);
  const [items14, setItems14] = useState([]);
  const [items15, setItems15] = useState([]);
  const [items16, setItems16] = useState([]);
  const [items17, setItems17] = useState([]);
  const [items18, setItems18] = useState([]);
  const [items19, setItems19] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=1`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=2`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems2(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=3`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems3(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=4`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems4(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=5`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems5(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=6`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems6(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=7`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems7(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=8`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems8(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=9`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems9(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=10`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems10(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=11`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems11(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=12`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems12(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=13`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems13(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=14`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems14(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=15`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems15(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=16`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems16(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=17`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems17(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=18`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems18(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?page=19`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems19(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <main className='home-section'>
      <SearchForm text={text} setText={setText} />
      <section className='home-card'>
        <CharacterGrid isLoading={isLoading} items={items} text={text} />
        <CharacterGrid isLoading={isLoading} items={items2} text={text} />
        <CharacterGrid isLoading={isLoading} items={items3} text={text} />
        <CharacterGrid isLoading={isLoading} items={items4} text={text} />
        <CharacterGrid isLoading={isLoading} items={items5} text={text} />
        <CharacterGrid isLoading={isLoading} items={items6} text={text} />
        <CharacterGrid isLoading={isLoading} items={items7} text={text} />
        <CharacterGrid isLoading={isLoading} items={items8} text={text} />
        <CharacterGrid isLoading={isLoading} items={items9} text={text} />
        <CharacterGrid isLoading={isLoading} items={items10} text={text} />
        <CharacterGrid isLoading={isLoading} items={items11} text={text} />
        <CharacterGrid isLoading={isLoading} items={items12} text={text} />
        <CharacterGrid isLoading={isLoading} items={items13} text={text} />
        <CharacterGrid isLoading={isLoading} items={items14} text={text} />
        <CharacterGrid isLoading={isLoading} items={items15} text={text} />
        <CharacterGrid isLoading={isLoading} items={items16} text={text} />
        <CharacterGrid isLoading={isLoading} items={items17} text={text} />
        <CharacterGrid isLoading={isLoading} items={items18} text={text} />
        <CharacterGrid isLoading={isLoading} items={items19} text={text} />
      </section>
    </main>
  );
}

export default Home;
