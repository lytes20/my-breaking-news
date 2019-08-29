const initialState = {
  headline: 'HEADLINE',
  storyline: 'STORYLINE',
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEADLINE_CHANGE':
      return {
        ...state,
        headline: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
