export const MenuNavegacion = (props) => {
  const { arrayLinks } = props;
  return (
    <nav className="col text-right">
      <ul className="list-inline m-0">
        {arrayLinks.map((link) => (
          <li className="list-inline-item" key={link}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};
