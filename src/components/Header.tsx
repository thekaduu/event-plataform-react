import { List, X } from "phosphor-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../redux/MenuSlice";
import Logo from "./Logo";

export function Header() {
  const isOpenMenu = useSelector((state:any) => state.menu.open)
  const dispatch = useDispatch()

  const open = () => {
    dispatch(openMenu())
  }

  const close = () => {
    dispatch(closeMenu())
  }

  return (
    <header className="w-full py-5 flex items-center justify-between px-6 lg:px-0  lg:justify-center bg-gray-700 border-b border-gray-600 ">
      <Logo />
      <div className="flex lg:hidden justify-center items-center gap-2">
        <span>Aulas</span>

        <div className="text-blue-500">
          {
            !isOpenMenu ? <List size={32} onClick={open} /> :
            <X size={32} onClick={close} />
          }
        </div>
      </div>
    </header>
  )
}