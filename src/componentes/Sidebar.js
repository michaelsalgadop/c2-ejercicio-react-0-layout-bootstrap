import { ListadoOtrasCosas } from "./ListadoOtrasCosas";
import { ListadoCategorias } from "./ListadoCategorias";
export const Sidebar = (props) => {
  const { tituloAside, arrayCategorias, subtituloAside, arrayOtrasCosas } =
    props;
  return (
    <aside className="sidebar">
      <h2>{tituloAside}</h2>
      <ListadoCategorias arrayCategorias={arrayCategorias}></ListadoCategorias>
      <h2>{subtituloAside}</h2>
      <ListadoOtrasCosas arrayOtrasCosas={arrayOtrasCosas}></ListadoOtrasCosas>
    </aside>
  );
};
