import axios from "./AxiosSetup";
import ToastService from "./ToastService";

const AUTH_URL = "/auth";

const register = async (
  name,
  adminName,
  adminEmail,
  adminPwd,
  adminPartPercentage
) => {
  try {
    const res = await axios.post(`${AUTH_URL}/register`, {
      name,
      admin: {
        name: adminName,
        email: adminEmail,
        password: adminPwd,
        partPercentage: adminPartPercentage,
      },
    });

    return res.data.user;
  } catch (error) {
    console.error(error);
    ToastService.notifyError(error.response.data.message);

    return null;
  }
};

const login = async (community, email, password) => {
  try {
    const res = await axios.post(`${AUTH_URL}/login`, {
      community,
      email,
      password,
    });

    return res.data.user;
  } catch (error) {
    console.error(error);
    ToastService.notifyError(error.response.data.message);

    return null;
  }
};

const isAuth = async () => {
  try {
    const res = await axios.get(`${AUTH_URL}/isAuth`);

    return res.data.user;
  } catch (error) {
    return null;
  }
};

const logout = async () => {
  try {
    await axios.get(`${AUTH_URL}/logout`);
  } catch (error) {
    return null;
  }
};

const AuthService = { register, login, isAuth, logout };

export default AuthService;
