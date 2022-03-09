import React, { useState } from "react";
import SimpleHeader from "../Components/SimpleHeader";
import Input from "../Components/Input";
import ActionButton from "../Components/ActionButton";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import SimpleFooter from "../Components/SimpleFooter";

export default function Login() {
  const [communityName, setCommunityName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);

  return (
    <React.Fragment>
      <SimpleHeader />
      <div className="flex items-center justify-center mt-6">
        <div className="max-w-xs md:max-w-md w-full">
          <div>
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900">
              Bienvenido! 👋
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Ingresa el nombre de tu comunidad y tus credenciales para acceder.
            </p>
          </div>
          <form
            className="mt-6"
            action="#"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e, communityName, email, password);
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
              label="Contaseña"
              required={true}
              customStyle="mt-4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between mt-3">
              <Switch.Group>
                <div className="flex items-center">
                  <Switch.Label className="mr-2 text-sm">
                    Recordarme
                  </Switch.Label>
                  <Switch
                    checked={remember}
                    onChange={setRemember}
                    className={`${
                      remember ? "bg-purple-600" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                  >
                    <span
                      className={`${
                        remember ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>

              <div className="text-sm">
                <Link
                  to="/forgot"
                  className="font-medium text-purple-600 hover:text-purle-500"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
            <ActionButton
              label="Accede a tu Comunidad"
              type="submit"
              customStyle="mt-12"
            />
          </form>
        </div>
      </div>
      <SimpleFooter />
    </React.Fragment>
  );
}
