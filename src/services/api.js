import axios from "axios";

export const API = (method, data, id) => {
  let URL;
  if (id !== undefined)
    URL = `https://6508632856db83a34d9c4222.mockapi.io/jobcards/${id}`;
  else URL = `https://6508632856db83a34d9c4222.mockapi.io/jobcards`;

  if (method === "delete") {
    return axios(URL, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  } else {
    return axios(URL, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      data: method === "post" || method === "put" ? data : "",
    })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
};
