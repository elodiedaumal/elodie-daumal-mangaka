import { React, useState, useEffect } from 'react';
const getStoredTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const SearchForm = (props) => {
  const [theme, setTheme] = useState(getStoredTheme());
  const [btntext, setBtntext] = useState('Light Theme');
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setBtntext('Light Theme');
    } else {
      setTheme('light-theme');
      setBtntext('Dark Theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <section className='search'>
      <button className='btn-theme' onClick={toggleTheme}>
        {btntext}
      </button>

      <form className='form-control'>
        <input
          type='text'
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
