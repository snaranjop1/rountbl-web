import React, { useState } from "react";
import ActionButton from "../Components/ActionButton";
import Input from "../Components/Input";
import SimpleFooter from "../Components/SimpleFooter";
import SimpleHeader from "../Components/SimpleHeader";

export default function Register() {
  const [communityName, setCommunityName] = useState();

  return (
    <React.Fragment>
      <SimpleHeader />
      <main className="flex items-center justify-center mt-6">
        <div className="max-w-xs md:max-w-md w-full">
          <div>
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 text-center">
              Crea una Comunidad 🚀
            </h1>
            <p className="mt-3 text-sm text-gray-600 text-center">
              Administra facilmente comunidades de propietarios, crea juntas,
              votaciones y lleva las cuentas de tu comunidad.
            </p>
          </div>
          <form
            className="mt-6"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e, communityName);
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
            <ActionButton
              label="Empieza a Crear Tu Comunidad"
              type="submit"
              customStyle="mt-12"
            />
          </form>
        </div>
      </main>
      <SimpleFooter />
    </React.Fragment>
  );
}
