import React from 'react';

const SearchForm = (props) => {
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchForm;
