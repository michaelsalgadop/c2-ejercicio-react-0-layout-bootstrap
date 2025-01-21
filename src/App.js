function App() {
  return (
    <div className="contenedor-general">
      <header className="cabecera d-flex align-items-center justify-content-between">
        <h1 className="col m-0">Título</h1>
        <nav className="col text-right">
          <ul className="list-inline m-0">
            <li className="list-inline-item">hola</li>
            <li className="list-inline-item">adiós</li>
            <li className="list-inline-item">ciao</li>
          </ul>
        </nav>
      </header>
      <div className="contenido d-flex flex-wrap">
        <main className="cuerpo-principal">
          <section>
            <h2>Titular de la noticia</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              adipisci eos laborum id, ullam cupiditate magni enim. Reiciendis
              itaque delectus pariatur sit dolores atque aspernatur explicabo
              iste saepe? Animi, ex.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              numquam, sunt pariatur tempora ea incidunt doloribus maxime aut
              accusamus atque at obcaecati sapiente illum ipsum, vel voluptatem
              dolor rem deserunt!
            </p>
          </section>
        </main>
        <aside className="sidebar">
          <h2>Categorías</h2>
          <ul>
            <li>Noticias de deporte</li>
            <li>Noticias de ocio</li>
            <li>Noticias de política</li>
            <li>Noticias de espectáculos</li>
          </ul>
          <h2>Otras cosas</h2>
          <ul>
            <li>Nosequé</li>
            <li>Nosecuánto</li>
            <li>Talycual</li>
          </ul>
        </aside>
      </div>
      <footer className="pie d-flex align-items-center justify-content-center">
        Texto del footer
      </footer>
    </div>
  );
}

export default App;
