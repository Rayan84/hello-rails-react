const initialState = {
  loading: false,
  data: '',
  error: ''
}

const greetingsReducer = (state = initialState, action) => {
  console.log('greetingsReducer called...')
  switch (action.type) {
    case 'GET_GREETINGS_REQUEST': {
    console.log('GET GREETINGS REQUEST report from reducer...')
    return {
      loading: true,
      data: '',
      error: ''
    };
  }

    case 'GET_GREETINGS_SUCCESS': {
      console.log('GET_Greetings_Success, report from reducer')
      return {
        loading: false,
        data: action.payload,
        error: ''
      }
    };

    dafault:
    console.log('default state...')
    return state;
  }

};

export default greetingsReducer;