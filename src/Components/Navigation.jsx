import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useTransition } from '@react-spring/web';
import React from 'react';
import NavMenu from './NavigationMenu';

export default function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);

  const maskTransition = useTransition(showMenu, {
    from: { position: 'fixed', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 300, friction: 30 },
  });


  const menuTransition = useTransition(showMenu, {
    from: { position: 'fixed', transform: 'translateX(100%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(100%)', opacity: 0 },
    config: { tension: 300, friction: 30 },
  });
  return (
    <nav className="bg-gray-300 p-3">
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {/* Mask overlay */}
      {maskTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[200]"
              onClick={() => setShowMenu(false)}
            />
          ),
      )}

      {/* Drawer panel */}
      {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              style={{
                ...style,
                position: 'fixed',
                top: 25,
                right: 0,
                height: '120vh',
                width: '50%',
                maxWidth: '15rem',
                zIndex: 200,
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f3f4f6', // Optional: fallback color
              }}
              // className="bg-white p-6 border-l border-gray-200 flex flex-col"
            >
              <NavMenu classMenu={() => setShowMenu(false)} />
            </animated.div>
          ),
      )}
    </nav>
  );
}