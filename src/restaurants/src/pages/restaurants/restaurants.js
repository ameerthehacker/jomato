import React, { useState, useEffect } from 'react';
import Restaurant from '../restaurant/restaurant';
import { Flex, Box } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?count=10`,
      {
        headers: {
          'user-key': '679c4e02b350c993f8f8c5d69392b8c9'
        }
      }
    )
    .then(res => res.json())
    .then(result => {
      setRestaurants(
        result.restaurants.map(obj => obj.restaurant)
      );
    });
  }, []);
  
  return (
    <Flex p={10} direction={"row"} wrap={"wrap"}>
     {restaurants.map((restaurant) => {
       return (
        <Box p={5} key={restaurant.id} className="restaurant-container">
          <Link to={`/restaurants/${restaurant.id}`}>
            <Restaurant restaurant={restaurant} />
          </Link>
        </Box>
       );
     })}
    </Flex>
  );
}

export default Restaurants;
