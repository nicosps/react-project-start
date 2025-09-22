import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "@react-spring/web";

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
        <nav className='bg-gray-300 p-3 text-center'>
            <span className='text-xl'>
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
            </span>
            {
                maskTransition((style, item) =>
                    item && <animated.div style={style} className="bg-black fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}></animated.div>
                )
            }
            {
                menuTransition((style, item) =>
                    item && <animated.div style={style} className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"><span className="font-bold">The Menu <ul>Home</ul></span></animated.div>
                )
            }
        </nav>
    );
}