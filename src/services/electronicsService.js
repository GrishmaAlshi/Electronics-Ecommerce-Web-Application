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

export const fetchAllElectronics = (dispatch, electronics) => {
    fetch(ELECTRONICS_API).then(response => response.json())
        .then(electronics =>
                  dispatch({
                               type:"fetch-all-electronics",
                               electronics
                           })
        );
}

export const fetchElectronicsById = (electronics) =>
    fetch(`${ELECTRONICS_API}/${electronics._id}`
    ).then(response => response.json());