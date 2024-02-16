const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

export default appReducer;
