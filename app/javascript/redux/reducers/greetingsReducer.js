const greetingsReducer = (state = initialState, action) => {
  console.log('greetingsReducer called...');
  switch(action.type) {
    case('GET_GREETINGS_REQUEST'):
    return ({
      loading: true,
      data: [],
      error: '',
    });

    case('GET_GREETINGS_SUCCESS'):
      return({
        loading: false,
        data: action.payload,
        error: ''
      })
  }

}

export default greetingsReducer;