import client from "./client";

const endpoint = "/";

const axios = require("axios").default;

export const sendMail = ({ mail, mailBody }) => {
  console.log(1);
  console.log(mail);
  console.log(mailBody);

  axios.post(`https://aboutme-backend.herokuapp.com/`, {
    mail,
    mailBody,
  });
  console.log(2);
};
