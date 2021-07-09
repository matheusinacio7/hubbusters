import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Layout.css';

import logo from '../../assets/img/logo.png';

function Layout({ children }) {
  useEffect(() => {
    document.title = 'HubBusters';
  }, []);

  return(
    <>
      <header className="main-header">
        <Link className="main-header__link" to="/">
          <img className="main-header__logo" src={ logo } alt="HubBusters! logo" />
          <h1>HubBusters!</h1>
        </Link>
      </header>
      { children }
      <footer className="main-footer">Feito por &nbsp;<a href="https://github.com/heyset" target="_blank" rel="noreferrer">Matheus "Set" Inacio</a></footer>
    </>
  );
}

export default Layout;