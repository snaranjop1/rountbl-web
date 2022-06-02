import React, { useContext, useState } from "react";
import SimpleHeader from "../Components/SimpleHeader";
import Input from "../Components/Input";
import ActionButton from "../Components/ActionButton";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SimpleFooter from "../Components/SimpleFooter";
import AuthContext from "../Context/AuthContext";

export default function Login() {
  const { user, login, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/app";
  const [communityName, setCommunityName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (user) {
    return <Navigate to={from} />;
  }

  return (
    <React.Fragment>
      <SimpleHeader />
      <main className="flex items-center justify-center">
        <div className="max-w-xs md:max-w-md w-full">
          <div className="mb-6 md:mb-12">
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 text-center">
              Bienvenido! 👋
            </h1>
            <p className="mt-3 text-sm text-gray-600 text-center">
              Ingresa el nombre de tu comunidad y tus credenciales para acceder.
            </p>
          </div>
          <form
            className="mt-6"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const data = { communityName, email, password };
              login(data, () => navigate(from, { replace: true }));
            }}
          >
            <Input
              type="text"
              name="community-name"
              label="Nombre Comunidad"
              required={true}
              customStyle="mt-4"
              onChange={(e) => setCommunityName(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              required={true}
              customStyle="mt-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              label="Contraseña"
              required={true}
              customStyle="mt-4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex mt-3 text-sm justify-end">
              <Link
                to="/forgot"
                className="font-medium text-purple-600 hover:text-purle-500"
              >
                Olvidaste tu contraseña?
              </Link>
            </div>
            <ActionButton
              label="Accede a tu Comunidad"
              loading={loading}
              type="submit"
              customStyle="mt-12"
            />
            <p className="text-sm text-center pt-4 text-gray-500">
              No tienes una comunidad?{" "}
              <Link
                to="/register"
                className="font-medium text-purple-800 hover:text-purle-500"
              >
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </main>
      <SimpleFooter />
    </React.Fragment>
  );
}
