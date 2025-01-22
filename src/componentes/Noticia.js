export const Noticia = (props) => {
  const { tituloSeccion, cuerpoNoticia } = props;
  return (
    <main className="cuerpo-principal">
      <section>
        <h2>{tituloSeccion}</h2>
        <p>{cuerpoNoticia}</p>
        <p>{cuerpoNoticia}</p>
      </section>
    </main>
  );
};
