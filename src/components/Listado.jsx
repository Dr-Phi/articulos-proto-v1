import React from "react";

export const Listado = () => {
  return (
    <>
      <article className="artic-item m-5 grow rounded-lg  bg-white px-6 py-14 text-center shadow-slate-400">
        <h3 className="font-bold">Desarrollo web</h3>
        <p className="description">by Dr-Phi</p>

        <button className="me-3 hover:bg-orange-400">Editar</button>
        <button className="hover:bg-red-800">Borrar</button>
      </article>
      <article className="artic-item m-5 grow rounded-lg  bg-white px-6 py-14 text-center shadow-slate-400">
        <h3 className="font-bold">Desarrollo web</h3>
        <p className="description">by Dr-Phi</p>

        <button className="me-3 hover:bg-orange-400">Editar</button>
        <button className="hover:bg-red-800">Borrar</button>
      </article>
    </>
  );
};
