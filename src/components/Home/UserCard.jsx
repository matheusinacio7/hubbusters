import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css';

function UserCard({ username, avatar }) {
  return(
    <li className="user-card">
      <Link to={`/user/${username}`}>
        <img alt={`Avatar for user ${username}`} src={ avatar } />
        <h1>{ username }</h1>
      </Link>
    </li>
  );
}

export default UserCard;
