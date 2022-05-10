const URL = 'http://127.0.0.1:3000/v1/greetings';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
export const getGreetingsRequest = () => {
  return {
    type: GET_GREETINGS_REQUEST
  }
}

export const getGreetingsSuccess = (payload) => {
  return {
    type: 'GET_GREETINGS_SUCCESS',
    payload
  }
}

export const getGreetingsFail = () => {
  return {
    type: 'GET_GREETINGS_FAIL'
  }
}

const getGreetings = () => (dispatch) => {
  dispatch(getGreetingsRequest());
  fetch(URL)
  .then(response => response.json())
  .then(json => dispatch(getGreetingsSuccess(json)))
  .catch(error => console.log(error));
};

export default getGreetings;