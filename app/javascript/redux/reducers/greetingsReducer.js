const initialState = {
  loading: false,
  data: 'initial greeting',
  error: '',
};


const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETINGS_REQUEST': {
    return {
      loading: true,
      data: '',
      error: ''
    };
  }

    case 'GET_GREETINGS_SUCCESS': {
      const newState = {
        loading: false,
        data: action.payload.message,
        error: ''
      };
      return newState;
    };

    default:
    return state;
  }
};

export default greetingsReducer;