import React from "react";

export default function SimpleHeader() {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-2">
          <h1 className="font-extrabold text-5xl text-purple-800">Rountbl</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
