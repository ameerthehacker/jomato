import React from 'react';
import { useParams, Link } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();

  return (
    <div>
      This is the microfrontend for restaurant details of {id}
      <Link to={"/restaurants"}>Back</Link>
    </div>
  );
}

export default RestaurantDetails;
