import React from 'react';
import { Link } from 'react-router-dom';

const HomeCards = (props) => {
  return (
    <Link className='home-card-container' to={`/character/${props.item.name}`}>
      <div className=''>
        <div className=' home-card-inner'>
          <div className='home-card-image'>
            {props.item.image ? (
              <img src={props.item.image} alt={props.item.name} />
            ) : (
              <img
                alt='errorimage'
                src='https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
              />
            )}
          </div>

          <div className='home-card-info'>
            <h1>{props.item.name}</h1>
            <ul>
              <li>
                <strong>{props.item.species}</strong>
              </li>
              <li>
                <strong>{props.item.gender}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCards;
