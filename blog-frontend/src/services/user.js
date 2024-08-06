import axios from "axios";
const baseUrl = "/api/users";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const currentUser = async () => {
  if (!token) return;
  const config = {
    headers: {Authorization: token},
  };
  const response = await axios.get(`${baseUrl}/me`, config);
  return response;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOne = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

export default {setToken, currentUser, getAll, getOne};
