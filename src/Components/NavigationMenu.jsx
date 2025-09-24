// import { Link } from 'react-router-dom';

// export default function NavMenu(props) {
//   return (
//     <div>
//       <div className="font-bold py-3">
//         App Name
//         <ul>
//           <li>
//             <Link
//               to="/"
//               className="text-blue-500 py-3 border-t border-b block"
//               onClick={props.classMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-blue-500 py-3 border-t border-b block"
//               onClick={props.classMenu}
//             >
//               About
//             </Link>
//             <Link
//               to="/products/:id"
//               className="text-blue-500 py-3 border-t border-b block"
//               onClick={props.classMenu}
//             >
//               Product
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

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
      <li>
        <Link to="/products/1" onClick={classMenu}>
          Product 1
        </Link>
      </li>
    </ul>
  );
}
