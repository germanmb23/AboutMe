const endpoint = "/";

const axios = require("axios").default;

export const sendMail = ({ mail, mailBody }) => {
  return axios
    .post(`https://aboutme-backend.herokuapp.com` + endpoint, {
      mail,
      mailBody,
    })
    .then(
      (response) => {
        if (response.status == 200) return true;
      },
      (error) => {}
    );
};
