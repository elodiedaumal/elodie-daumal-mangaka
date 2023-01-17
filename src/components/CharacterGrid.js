import React from 'react';
import HomeCards from './HomeCards';
import Loading from './Loading';

const CharacterGrid = (props) => {
  const { isLoading, items, text } = props;
  return isLoading ? (
    <Loading />
  ) : (
    <section className='home-card'>
      {items
        .filter((item) =>
          text === ''
            ? true
            : item.name.toLowerCase().includes(text.toLowerCase())
        )
        .map((item) => (
          <HomeCards item={item}></HomeCards>
        ))}
    </section>
  );
};

export default CharacterGrid;
