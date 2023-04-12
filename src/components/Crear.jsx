import React, { useState } from "react";

export const Crear = () => {
  const title = "Añadir artículo";
  const [articState, setArticState] = useState({
    title: "",
    description: "",
  });

  const getFormData = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let artic = {
      id: new Date().getTime(),
      title,
      description,
    };

    setArticState(artic);

    console.log(articState);
  };

  return (
    <div className="add m-5 mx-2 w-[90%] rounded-lg bg-white p-5 pt-2 text-center shadow shadow-slate-400">
      <h3 className="title font-semibold">{title}</h3>
      <form onSubmit={getFormData}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <input
          type="submit"
          id="save"
          value="Guardar"
          className="hover:bg-blue-900"
        />
      </form>
    </div>
  );
};
