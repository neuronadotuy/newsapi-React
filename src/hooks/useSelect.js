/** @format */

import React, { useState } from "react";

const useSelect = (initialState, categorias) => {
  const [state, actualizarState] = useState(initialState);

  const SelectNoticias = () => {
    return (
      <select
        className="browser-default"
        value={state}
        onChange={(e) => {
          actualizarState(e.target.value);
        }}>
        {categorias.map((categoria) => {
          return (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          );
        })}
      </select>
    );
  };

  return [state, SelectNoticias];
};

export default useSelect;
