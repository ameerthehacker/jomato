import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Flex, List, ListItem } from '@chakra-ui/core';

function RestaurantDetails() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/reviews?res_id=${id}
      `,
      {
        headers: {
          'user-key': '679c4e02b350c993f8f8c5d69392b8c9'
        }
      }
    )
    .then(res => res.json())
    .then(result => {
      setReviews(
        result.user_reviews.map(obj => obj.review)
      );
    });
  }, []);

  return (
    <>
      <Flex p={20}>
        <Link to={"/restaurants"}>
          &larr;	
          Back
        </Link>
      </Flex>
      <List p={20} spacing={3}>
        {reviews.map(review => (
          <ListItem key={review.id}>
            {review.review_text}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default RestaurantDetails;
