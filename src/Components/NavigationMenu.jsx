import { Link } from 'react-router-dom';
export default function NavigationMenu({ classMenu }) {
  return (
    <ul>
      <li>
        <Link to="/" onClick={classMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={classMenu}>
          About
        </Link>
      </li>

    </ul>
  );
}
