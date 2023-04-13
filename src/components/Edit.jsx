import React from "react";

export const Edit = ({ artic, getArtics, setEdit, setListadoState }) => {
  const title_component = "Edit article";

  const saveEdit = (e, id) => {
    e.preventDefault();

    let targetArtic = e.target;
    const saved_artics = getArtics();
    const index = saved_artics.findIndex((artic) => artic.id === id);

    //create obj with id of that index, replacing the value of title & desc
    let updated_artic = {
      id,
      title: targetArtic.title.value,
      description: targetArtic.description.value,
    };
    // Update element
    saved_artics[index] = updated_artic;

    // save updated arr in localStorage & update status
    localStorage.setItem("artics", JSON.stringify(saved_artics));

    setListadoState(saved_artics);
    setEdit(0);
  };

  return (
    <div className="edit_form">
      <h4 className="title">{title_component}</h4>
      <form onSubmit={(e) => saveEdit(e, artic.id)}>
        <input
          type="text"
          name="title"
          defaultValue={artic.title}
          className="edited_title"
        />
        <textarea
          name="description"
          defaultValue={artic.description}
          className="edited_description"
        ></textarea>
        <input
          type="submit"
          className="edit mt-3 cursor-pointer rounded-sm bg-[#0b70e1] px-4 py-1 text-[17px] font-semibold text-white transition-colors hover:bg-blue-900"
          value="Actualizar"
        />
      </form>
    </div>
  );
};
