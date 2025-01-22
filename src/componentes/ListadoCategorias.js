export const ListadoCategorias = (props) => {
  const { arrayCategorias } = props;
  return (
    <ul>
      {arrayCategorias.map((categoria) => (
        <li key={categoria}>{categoria}</li>
      ))}
    </ul>
  );
};
