import Logo from "./Logo";
import Menu from "./Menu";

import { useState } from "react";


function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="w-full bg-teal-300  sticky top-0 
                          sm:flex sm:items-center sm:justify-between
                          ">
        <div className="flex justify-between">
          <Logo />
          <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden ">
            <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="Menu" />
          </button>
        </div>
        {showMenu && <Menu />}
      </header>
    </>
  );
}

export default Header;