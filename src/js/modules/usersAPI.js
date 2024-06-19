import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
});

export async function getUsers() {
  const res = await axios.get('');
  return res.data;
}

export async function createUser(user) {
  const res = await axios.post('', user);
  return res.data;
}

export async function updateUser({ id, ...user }) {
  const res = await axios.patch(`/${id}`, user);
  return res.data;
}

export async function resetUser({ id, ...user }) {
  const res = await axios.put(`/${id}`, user);
  return res.data;
}

export async function deleteUser(id) {
  const res = await axios.delete(`/${id}`);
  return res.data;
}

//!======================================================
