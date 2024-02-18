const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return { ...state, language: action.payload };

    default:
      return state;
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
  }
};

export default appReducer;
