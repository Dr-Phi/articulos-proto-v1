import React, { useEffect, useState } from "react";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    getArtics();
  }, []);

  const getArtics = () => {
    let artics = JSON.parse(localStorage.getItem("artics"));

    setListadoState(artics);

    return artics;
  };

  const eraseArtic = (id) => {
    let saved_artics = getArtics();
    //Filter list of artics to eliminate the selected one
    let new_arr_artics = saved_artics.filter((artic) => artic.id !== +id);

    setListadoState(new_arr_artics);
    //update data in local storage
    localStorage.setItem("artics", JSON.stringify(new_arr_artics));
  };

  return (
    <>
      {listadoState.length > 0 && listadoState != null ? (
        listadoState.map((artic) => {
          return (
            <article
              key={artic.id}
              className="artic-item m-5 grow rounded-lg bg-white  px-6 py-14 text-center shadow shadow-slate-400 md:max-w-[17rem]"
            >
              <h3 className="font-bold">{artic.title}</h3>
              <p className="description">{artic.description}</p>

              <button className="me-3 hover:bg-orange-400">Editar</button>
              <button
                onClick={() => {
                  eraseArtic(artic.id);
                }}
                className="delete hover:bg-red-800"
              >
                Borrar
              </button>
            </article>
          );
        })
      ) : (
        <div className="mx-auto pt-[10rem]">
          <p className="text-bold text-2xl">No hay artículos en tu sesión</p>
          <p className="text-slate-800">
            Añadelos en la barra lateral derecha.
          </p>{" "}
        </div>
      )}
    </>
  );
};
