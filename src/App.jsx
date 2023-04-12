import React from "react";
import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";

function App() {
  return (
    <div>
      <div id="layout" className="md:grid-cols-[auto_auto_auto_20rem]">
        <header className="header flex">
          <div className=" min-h-full min-w-[46vw] bg-gradient-to-r from-black to-blue-900 pe-2 pt-6 text-right text-3xl font-bold text-white">
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
          <ul className="ms-auto flex min-w-[54vw] justify-end bg-gradient-to-r from-black to-blue-900 pt-2 text-lg font-semibold text-white">
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
          <Listado />
        </section>

        <aside
          id="lateral"
          className=" border border-red-600 border-s-slate-200 bg-slate-50 p-5"
        >
          <Buscador />

          <Crear />
        </aside>

        <footer
          className="my-auto border-t border-white bg-blue-100 ps-5 text-left leading-[5rem] text-gray-600"
          id="footer"
        >
          &copy; <a href="https://github.com/Dr-Phi">github.com/Dr-Phi</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
