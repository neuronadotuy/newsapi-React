/** @format */

import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  // definir categoria y noticias
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const checkAPI = async () => {
      const apiKey = "682d965d1304458bad989d2567fa814e";
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`;

      const req = await fetch(apiUrl);
      const noticias = await req.json();

      setNoticias(noticias.articles);
    };

    checkAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header title="Buscador de Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
      </div>
      <ListadoNoticias noticias={noticias} />
    </Fragment>
  );
}

export default App;
