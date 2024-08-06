import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOne = async (blogId) => {
  const response = await axios.get(`${baseUrl}/${blogId}`);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: {Authorization: token},
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (id, newObject) => {
  const config = {
    headers: {Authorization: token},
  };
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};
const remove = async (id) => {
  const config = {
    headers: {Authorization: token},
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const addComment = async (id, comment) => {
  const response = await axios.post(`${baseUrl}/${id}/comment`, {
    content: comment,
  });
  return response.data;
};

const like = async (id, user) => {
  const response = await axios.patch(`${baseUrl}/${id}/likes`, {
    user,
  });
  return response.data;
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
  addComment,
  like,
  setToken,
};
