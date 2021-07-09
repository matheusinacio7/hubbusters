import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './User.css';

import userSvg from '../assets/img/users.svg';

import { Layout, Loading } from '../components/common';
import { RepoCard } from '../components/User';

function User() {
  const [userInfo, setUserInfo] = useState({ isLoading: true });
  const [userRepos, setUserRepos] = useState({ isLoading: true, list: [] });
  const params = useParams();

  useEffect(() => {
    const BASE_URL = 'https://api.github.com';
    const { username } = params;

    fetch(`${BASE_URL}/users/${username}`)
      .then((response) => {
        if (response.ok) return response.json()

        throw new Error('explodiu');
      })
      .then((result) => setUserInfo({...result, isLoading: false}))
      .catch((err) => setUserInfo({ error: err, isLoading: false }));
    
    fetch(`${BASE_URL}/users/${username}/repos`)
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error('explodiu');
      })
      .then((repos) => repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4))
      .then((result) => setUserRepos({ isLoading: false, list: result }))
      .catch((err) => setUserRepos({ error: err, isLoading: false }))
  }, [params]);

  const { name, login, avatar_url, bio, followers, following } = userInfo;

  return(
    <Layout>
      <main className="user">
        <header className="user__header">
          <Loading
            isLoading={ userInfo.isLoading }
            hasError={ userInfo.error }
            result={
              <> 
                <div>
                  <img src={ avatar_url } alt={`Avatar for user ${login}`} />
                </div>
                <div className="user__header__infos">
                  <h1>
                    <a href={`https://github.com/${login}`} target="blank" rel="noreferrer">{ login }</a>
                  </h1>
                  <h2>{ name }</h2>
                  <p className="user__header__infos__bio">{ bio }</p>
                  <section className="user__header__infos__follows">
                    <img src={ userSvg } alt="icon representing two people" />
                    <p><span>{ followers } followers</span> <span>{ following } following</span></p>
                  </section>
                </div>
              </>
            }
          />
        </header>

        <section className="user__repos">
          <h1>Main repos</h1>
          <Loading
            isLoading={ userRepos.isLoading }
            hasError={ userRepos.error }
            result={
              <ol>
                { userRepos.list.map(({ id, name, html_url, language, stargazers_count }) =>
                  <RepoCard
                    name={ name }
                    url={ html_url }
                    language={ language }
                    stars={ stargazers_count }
                    key={ id }
                  />) }
              </ol>
            }
          />
        </section>
      </main>
    </Layout>
  );
}

export default User;