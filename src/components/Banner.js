import React, { useState } from 'react';
import Search from './Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import './Banner.css';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          className='banner__searchButton'
          variant='outlined'
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gataway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;