import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';
import SingleCaracterCard from '../components/SingleCaracterCard';

const SingleCaracter = (props) => {
  let { name } = useParams();
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );

      //we've got the data, so we put setIsLoading as false.
      setItems(result.data.results[0]);
      setIsLoading(false);
    };

    fetchCharacter();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <SingleCaracterCard
      name={items.name}
      status={items.status}
      image={items.image}
      species={items.species}
      type={items.type}
      gender={items.gender}
      origin={items.origin.name}
    />
  );
};

export default SingleCaracter;
