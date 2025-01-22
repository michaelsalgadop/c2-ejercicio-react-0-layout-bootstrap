import { MenuNavegacion } from "./MenuNavegacion";

export const Cabecera = (props) => {
  const { tituloNoticia, arrayLinks } = props;
  return (
    <header className="cabecera d-flex align-items-center justify-content-between">
      <h1 className="col m-0">{tituloNoticia}</h1>
      <MenuNavegacion arrayLinks={arrayLinks}></MenuNavegacion>
    </header>
  );
};
