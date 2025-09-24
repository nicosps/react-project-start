import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useTransition } from '@react-spring/web';
import React from 'react';
import NavMenu from './NavigationMenu';

export default function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);

  const maskTransition = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransition = useTransition(showMenu, {
    from: { transform: 'translateX(-100%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(-100%)', opacity: 0 },
  });

  return (
    <nav className="bg-gray-300 p-3">
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {/* Drawer and mask are outside nav content */}
      {maskTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed bg-white top-0 left-0 w-96 h-full z-50 shadow p-4 border border-gray-400"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          ),
      )}
      {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed bg-white top-0 left-0 w-96 h-full z-50 shadow p-4 border border-gray-400"
            >
              <NavMenu classMenu={() => setShowMenu(false)} />
            </animated.div>
          ),
      )}
      {/* {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed bg-white top-0 left-0 w-80 h-full z-50 shadow p-4"
            >
              <NavMenu classMenu={() => setShowMenu(false)} />
            </animated.div>
          ),
      )} */}
    </nav>
  );
}
