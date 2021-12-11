const LAPTOPS_API = "http://localhost:4000/api/laptops";

export const fetchAllLaptops = (dispatch, electronics) => {
  fetch(`${ELECTRONICS_API}`)
    .then((response) => response.json())
    .then((laptops) =>
      dispatch({
        type: "fetch-all-electronics",
        electronics: laptops,
      })
    );
};
