/** @format */

import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategoria }) => {
  const CATEGORIAS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  // custom hoook
  const [categoria, SelectNoticias] = useSelect("general", CATEGORIAS);

  // submit al form, pasa la categoria a App.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form action="" onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
