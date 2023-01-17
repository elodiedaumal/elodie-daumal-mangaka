import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWarehouse } from 'react-icons/fa';
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
    // <article className='card'>
    //   <div className='product-details'>
    //     <h1>{name}</h1>
    //     <h1>rick</h1>

    //     <p className='alive'>{props.item.status}</p>

    //     <div className='control'>
    //       <Link to='/'>
    //         <button className='btn'>
    //           <span className='price'>Home</span>
    //           <span className='shopping-cart'>
    //             <FaWarehouse />
    //           </span>

    //           <span className='buy'>Go Now</span>
    //         </button>
    //       </Link>
    //     </div>
    //   </div>

    //   <div className='product-image'>
    //     <img src={props.item.image} alt={props.item.name} />

    //     <div className='info'>
    //       <h2> Description</h2>
    //       <ul>
    //         <li>
    //           <strong>Species: </strong> {props.item.species}
    //         </li>
    //         <li>
    //           <strong>Type: </strong> {props.item.type}
    //         </li>
    //         <li>
    //           <strong>Gender: </strong> {props.item.gender}
    //         </li>
    //         <li>
    //           <strong>Origin: </strong>
    //           {props.item.origin}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </article>
  );
};

export default SingleCaracter;
