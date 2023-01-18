import React from 'react';
import { Link } from 'react-router-dom';
import { FaWarehouse } from 'react-icons/fa';

const SingleCaracterCard = ({
  name,
  image,
  species,
  type,
  gender,
  origin,
  status,
}) => {
  function isAlive() {
    if (status.includes('ead')) {
      return 'dead';
    }
    return 'alive';
  }
  console.log(status);
  return (
    <>
      <article className='card'>
        <div className='product-details'>
          <h1>{name}</h1>

          <p className={isAlive()}>{status}</p>

          <div className='control'>
            <Link to='/'>
              <button className='btn'>
                <span className='price'>Home</span>
                <span className='shopping-cart'>
                  <FaWarehouse />
                </span>

                <span className='buy'>Go Now</span>
              </button>
            </Link>
          </div>
        </div>

        <div className='product-image'>
          <img src={image} alt={name} />

          <div className='info'>
            <h2> Description</h2>
            <ul>
              <li>
                <strong>Species: </strong> {species}
              </li>
              <li>
                <strong>Type: </strong> {type}
              </li>
              <li>
                <strong>Gender: </strong> {gender}
              </li>
              <li>
                <strong>Origin: </strong>
                {origin}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleCaracterCard;
