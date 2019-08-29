const initialState = {
    headline: "HEADLINE",
    storyline: "STORYLINE",
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

export default appReducer;
