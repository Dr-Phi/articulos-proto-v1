import React from "react";

function App() {
  return (
    <div>
      <div id="layout">
        <header className="header flex">
          <div className=" min-h-full min-w-[28rem] bg-gradient-to-r from-black to-blue-900 pe-2 pt-6 text-right text-3xl font-bold text-white">
            <img
              src="../src/images/pill_icon.png"
              alt=""
              width="50"
              height="50"
              id="icon-pill"
              className="me-[75%] inline cursor-pointer duration-200 ease-in hover:scale-125 hover:animate-pulse"
            />
            GPT
          </div>
          <p className="me-auto pt-6 text-left text-3xl font-bold">Pills</p>
        </header>

        <nav className="navi ms-auto flex">
          <div className="h-full max-w-[30%] bg-white"></div>
          <ul className="ms-auto flex min-w-[70%] justify-end bg-gradient-to-r from-black to-blue-900 pt-2 text-lg font-semibold text-white">
            <li>
              <a className="ms-[2.45vw] block" href="/#">
                Inicio
              </a>
            </li>
            <li>
              <a className="ms-5 block" href="/#">
                Programación Funcional
              </a>
            </li>
            <li>
              <a className="mx-6 block" href="/#">
                Chunks
              </a>
            </li>
            <li>
              <a className="me-[9vw] block" href="/#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <section
          id="mcontent"
          className="flex min-w-full grow flex-row flex-wrap items-start  justify-start bg-slate-50"
        >
          {/* Here goes the articles */}
        </section>

        <aside
          id="lateral"
          className=" border border-red-600 border-s-slate-200 bg-slate-50 p-5"
        >
          <div className="search m-5 mx-2 w-[90%] rounded-lg bg-white p-5 pt-2 text-center shadow shadow-slate-400">
            <h3 className="title font-semibold">Buscador</h3>
            <form>
              <input type="text" id="search_field" />
              <button id="search" className="hover:bg-blue-900">
                Buscar
              </button>
            </form>
          </div>

          <div className="add m-5 mx-2 w-[90%] rounded-lg bg-white p-5 pt-2 text-center shadow shadow-slate-400">
            <h3 className="title font-semibold">Añadir artículo</h3>
            <form>
              <input type="text" id="title" placeholder="Titulo" />
              <textarea id="description" placeholder="Descripción"></textarea>
              <input
                type="submit"
                id="save"
                value="Guardar"
                className="hover:bg-blue-900"
              />
            </form>
          </div>
        </aside>

        <footer
          className="my-auto border-t border-white bg-blue-100 text-left leading-[5rem] text-gray-600"
          id="footer"
        >
          &copy; <a href="https://github.com/Dr-Phi">github.com/Dr-Phi</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
