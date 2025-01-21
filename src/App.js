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
      <header className="cabecera d-flex align-items-center justify-content-between">
        <h1 className="col m-0">{tituloNoticia}</h1>
        <nav className="col text-right">
          <ul className="list-inline m-0">
            {arrayLinks.map((link) => (
              <li className="list-inline-item" key={link}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="contenido d-flex flex-wrap">
        <main className="cuerpo-principal">
          <section>
            <h2>{tituloSeccion}</h2>
            <p>{cuerpoNoticia}</p>
            <p>{cuerpoNoticia}</p>
          </section>
        </main>
        <aside className="sidebar">
          <h2>{tituloAside}</h2>
          <ul>
            {arrayCategorias.map((categoria) => (
              <li key={categoria}>{categoria}</li>
            ))}
          </ul>
          <h2>{subtituloAside}</h2>
          <ul>
            {arrayOtrasCosas.map((otraCosa) => (
              <li key={otraCosa}>{otraCosa}</li>
            ))}
          </ul>
        </aside>
      </div>
      <footer className="pie d-flex align-items-center justify-content-center">
        {textoCopyright &&
          `Texto del footer - Ningún derecho reservado, copia lo que quieras`}
      </footer>
    </div>
  );
}

export default App;
