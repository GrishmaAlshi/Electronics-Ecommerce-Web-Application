const initialState = {
  electronics: {},
};

const electronics = (state = initialState, action) => {
  switch (action.type) {
    case "create-electronics":
      return {
        electronics: {
          ...action.electronics,
        },
      };
    case "fetch-all-electronics":
      console.log(action.electronics);
      return {
        electronics: action.electronics,
      };

    case "fetch-electronics-by-id":
      return {
        electronics: action.electronics,
      };
    default:
      return state;
  }
};

export default electronics;
