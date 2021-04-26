import client from "./client";

const endpoint = "/";

const axios = require("axios").default;

export const sendMail = ({ mail, mailBody }) => {
  return axios
    .post(`https://aboutme-backend.herokuapp.com/`, {
      mail,
      mailBody,
    })
    .then(
      (response) => {
        console.log(response.status);
        if (response.status == 200) return true;
      },
      (error) => {
        console.log(error);
      }
    );
  console.log(data);
};
