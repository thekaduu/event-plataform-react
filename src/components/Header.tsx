import { List, X } from "phosphor-react";
import { useState } from "react";
import Logo from "./Logo";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="w-full py-5 flex items-center justify-between px-6 lg:px-0  lg:justify-center bg-gray-700 border-b border-gray-600 ">
      <Logo />
      <div className="flex lg:hidden justify-center items-center gap-2">
        <span>Aulas</span>

        <div className="text-blue-500">
          {
            !openMenu ? <List size={32} onClick={() => setOpenMenu(!openMenu)} /> :
            <X size={32} onClick={() => setOpenMenu(!openMenu)} />
          }
        </div>
      </div>
    </header>
  )
}