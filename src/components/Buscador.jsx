import React from "react";

export const Buscador = () => {
  return (
    <div className="search m-5 mx-2 w-[90%] rounded-lg bg-white p-5 pt-2 text-center shadow shadow-slate-400">
      <h3 className="title font-semibold">Buscador</h3>
      <form>
        <input type="text" id="search_field" />
        <button
          type="button"
          id="search"
          className="bg-[#0b70e1] hover:bg-blue-900"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};
