import axios from "axios";
import { API_URL } from "app/@function/wsCode";
import { getHeaders } from "./authentication"
export const getGroupById = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/group/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllGroup = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/group/get-all`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const joinGroup = async (idGroup, idUser) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/group/add-member/${idGroup}`, {idUser}, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const outGroup = async (idGroup, idUser) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/group/remove-member/${idGroup}`, {idUser}, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createGroup = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/group/create`,data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
