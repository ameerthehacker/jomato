import React from 'react';
import { Link } from 'react-router-dom';

function Restaurants() {
  return (
    <div>
      This is the restaurants microfrontend
      <Link to={"/restaurants/1"}>See</Link>
    </div>
  );
}

export default Restaurants;
