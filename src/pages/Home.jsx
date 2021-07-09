import React from 'react';
import { useState } from 'react';

import './Home.css'
import logo from '../assets/img/logo.png';

import withStore from '../utils/withStore';

import { queryUsersAndUpdate } from '../agents';
import { Layout, Loading } from '../components/common';
import { UserCard } from '../components/Home';

function Home({ users, queryUsersAndUpdate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResult, isLoading, hasError } = users;

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm) return;
    queryUsersAndUpdate(searchTerm);
  }

  return(
    <Layout>
      <main className="home">
        <header className="home__header">
          <img className="home__splash-logo" src={ logo } alt="HubBusters! logo" />
          <h1>HubBusters!</h1>
        </header>

        <form
          onSubmit={ handleSubmit }
          className="search-form"
        >
          <input
            className="search-form__input-field"
            type="text"
            placeholder="Who you gonna crawl?!"
            value={ searchTerm }
            onChange={ ({ target }) => setSearchTerm(target.value) }
          />

          <button className="search-form__submit-button" type="submit">HubBusters!</button>
        </form>

        <section className="home__search-results">
          <Loading
            hasError={ hasError }
            isLoading={ isLoading }
            result={
              <ol>
                { searchResult.map(({ login, avatar_url, id }) => <UserCard key={ id } avatar={ avatar_url } username={ login } />) }
              </ol> }
          />
        </section>
      </main>
    </Layout>
  );
}

export default withStore(Home, ['users'], [queryUsersAndUpdate]);