import React from 'react';
import HomeCards from './HomeCards';
import Loading from './Loading';
import { nanoid } from 'nanoid';

const CharacterGrid = (props) => {
  const { isLoading, items, text } = props;
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {items
        .filter((item) =>
          text === ''
            ? true
            : item.name.toLowerCase().includes(text.toLowerCase())
        )
        .map((item) => (
          <HomeCards key={nanoid()} item={item}></HomeCards>
        ))}
    </>
  );
};

export default CharacterGrid;
