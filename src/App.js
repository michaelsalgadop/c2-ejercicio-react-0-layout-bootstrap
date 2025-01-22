import { Cabecera } from "./componentes/Cabecera";
import { Noticia } from "./componentes/Noticia";
import { Sidebar } from "./componentes/Sidebar";

function App() {
  const tituloNoticia = "Título";
  const tituloSeccion = "Titular de la noticia";
  const cuerpoNoticia =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci eos laborum id, ullam cupiditate magni enim. Reiciendis itaque delectus pariatur sit dolores atque aspernatur explicabo iste saepe? Animi, ex.";
  const tituloAside = "Categorías";
  const subtituloAside = "Otras cosas";
  const arrayLinks = ["hola", "adiós", "ciao"];
  const arrayCategorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de política",
    "Noticias de espectáculos",
  ];
  const arrayOtrasCosas = ["Nosequé", "Nosecuánto", "Talycual"];
  const textoCopyright = true;
  return (
    <div className="contenedor-general">
      <Cabecera
        tituloNoticia={tituloNoticia}
        arrayLinks={arrayLinks}
      ></Cabecera>
      <div className="contenido d-flex flex-wrap">
        <Noticia
          tituloSeccion={tituloSeccion}
          cuerpoNoticia={cuerpoNoticia}
        ></Noticia>
        <Sidebar
          tituloAside={tituloAside}
          arrayCategorias={arrayCategorias}
          subtituloAside={subtituloAside}
          arrayOtrasCosas={arrayOtrasCosas}
        ></Sidebar>
      </div>
      <footer className="pie d-flex align-items-center justify-content-center">
        {textoCopyright &&
          `Texto del footer - Ningún derecho reservado, copia lo que quieras`}
      </footer>
    </div>
  );
}

export default App;
