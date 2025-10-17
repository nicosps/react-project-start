import { Link } from 'react-router-dom';
export default function NavigationMenu({ classMenu }) {
  return (
    <ul
      style={{
        listStyleType: 'none',
        padding: 10,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <li>
        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '1.25rem' }} to="/" onClick={classMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '1.25rem'}} to="/about" onClick={classMenu}>
          About
        </Link>
      </li>
    </ul>
  );
}
