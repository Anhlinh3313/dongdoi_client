import axios from "axios";
import { API_URL } from "../app/@function/wsCode";
export const getHeaders = () => {
  const data = window.localStorage.getItem('userThethao789');
  if (data) {
    return {
      headers: {
        'Authorization': JSON.parse(data)?.token
      }
    }
  } else {
    return {}
  }
}
export const registerUser = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/register`, data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/login`, data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const loginGoogle = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/login-google`, data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const loginFacebook = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/login-facebook`, data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const UploadAvatar = async (data, id) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/upload-avatar/${id}`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ChangePassword = async (data, id) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/change-password/${id}`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getInfoUser = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/user-client/getUser/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllUser = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/user-client/getUsers`
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const followUser = async (id, data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/${id}/follow`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const unFollowUser = async (id, data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user-client/${id}/unFollow`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/reset-password`, data, getHeaders()
    );

    return response.data;
  } catch {
    return error;
  }
}


export const passwordReset = async (id, token, data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/reset-password/${id}/${token}`, data, getHeaders()
    );

    return response.data;
  } catch {
    return error;
  }
}