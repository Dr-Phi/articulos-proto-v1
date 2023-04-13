export const SaveInStorage = (clave, elemento) => {
  // get what we have in local storage
  let items = JSON.parse(localStorage.getItem(clave));
  if (Array.isArray(items)) {
    items.push(elemento);
  } else {
    items = [elemento];
  }
  localStorage.setItem(clave, JSON.stringify(items));

  return elemento;
};
