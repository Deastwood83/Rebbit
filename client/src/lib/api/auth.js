import apiClient from ".";

const login = async (username, password) => {
  try {
    const resp = await apiClient.post("/auth/login", {
      username,
      password,
    });

    return resp.data;
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {String} email
 * @param {String} username
 * @param {String} password
 * @param {Date} birthday
 */
const register = async (email, username, password, birthday) => {
  try {
    const resp = await apiClient.post("/auth/register", {
      email,
      username,
      password,
      birthday,
    });

    return resp.data;
  } catch (err) {
    throw err;
  }
};

const status = async () => {
  try {
    const resp = await apiClient.get("/auth/status");

    return resp.data;
  } catch (err) {
    throw err;
  }
};

const authService = {
  login,
  register,
  status,
};

export default authService;
