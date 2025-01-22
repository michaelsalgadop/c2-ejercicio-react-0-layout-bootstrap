export const ListadoOtrasCosas = (props) => {
  const { arrayOtrasCosas } = props;
  return (
    <ul>
      {arrayOtrasCosas.map((otraCosa) => (
        <li key={otraCosa}>{otraCosa}</li>
      ))}
    </ul>
  );
};
