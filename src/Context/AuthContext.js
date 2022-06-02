import { createContext, useEffect, useState } from "react";
import AuthService from "../Services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const user = await AuthService.isAuth();
      setUser(user);
      setLoading(false);
    };

    checkUser();
  }, []);

  const login = async (data) => {
    setLoading(true);
    const { communityName, email, password } = data;
    const user = await AuthService.login(communityName, email, password);
    setUser(user);
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await AuthService.logout();
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
