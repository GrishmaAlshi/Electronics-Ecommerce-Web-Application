const ELECTRONICS_API = "http://localhost:4000/api/electronics";

export const createNewElectronics = (electronics) => {
  return fetch(ELECTRONICS_API, {
    method: "POST",
    body: JSON.stringify(electronics),
    headers: {
      "content-type": "application/json",
    },
  });
};
