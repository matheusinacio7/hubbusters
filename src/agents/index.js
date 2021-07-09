import createAgent from '../utils/createAgent';
const BASE_URL = 'https://api.github.com'

const receiveUsers = createAgent('receiveUsers');
const requestUsers = createAgent('requestUsers');
const reportError = createAgent('reportError');

export const queryUsersAndUpdate = (term) => (dispatch) => {
  dispatch(requestUsers());
  return fetch(`${BASE_URL}/search/users?q=${encodeURIComponent(term)}`)
    .then((response) => {
      if (response.ok) return response.json();

      throw new Error('something went wrong..');
    })
    .then((result) => {
      const queryArray = result.items.slice(0, 5);

      dispatch(receiveUsers(queryArray));
    })
    .catch((err) => dispatch(reportError()));
}
