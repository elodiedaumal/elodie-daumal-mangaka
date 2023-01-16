import React from 'react';

import QuotesList from '../components/QuotesList';
import SearchForm from '../components/SearchForm';

const home = () => {
  return (
    <main>
      <QuotesList />
      <SearchForm />
    </main>
  );
};

export default home;
