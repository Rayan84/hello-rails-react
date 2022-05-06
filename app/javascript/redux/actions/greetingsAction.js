const URL = 'http://127.0.0.1:3000/v1/greetings'

export const getGreetingsRequest = () => {
  return {
    type: 'GET_GREETINGS_REQUEST'
  }
}

export const getGreetingsSucceed = (payload) => {
  return {
    type: 'GET_GREETINGS_SUCCEED',
    payload
  }
}

export const getGreetingsFail = () => {
  return {
    type: 'GET_GREETINGS_FAIL'
  }
}

const getGreetings = () => (dispatch) => {
  console.log('getGreetings function launched...')
  dispatch(getGreetingsRequest);
  fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .then(json => dispatch(getGreetingsSucceed(json)))
  .catch(error => console.log(error));

};

// const getGreetings = () => {
//   console.log('text from new getGreetings...')
// }
export default getGreetings;