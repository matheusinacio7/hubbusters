import React from 'react';
import './RepoCard.css';

import starSvg from '../../assets/img/star.svg';

function RepoCard({ name, url, stars, language }) {
  return(
    <li className="repo-card">
      <a href={ url } target="_blank" rel="noreferrer">
        <h1>{ name }</h1>
        <p>{ language }</p>
        <p>
          <img src={ starSvg } alt="star icon" />
          <span>{ stars }</span>
        </p>
      </a>
    </li>
  );
}

export default RepoCard;
