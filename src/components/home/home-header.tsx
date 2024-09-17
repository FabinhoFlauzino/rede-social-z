"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { HomeMenu } from "./home-menu";

export function HomeHeader() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="flex justify-between p-6 border-b-2 border-b-gray-900">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
      <div className="hidden lg:block text-2xl">
        Página Inicial
      </div>

      <div
        onClick={() => setShowMenu(true)}
        className="cursor-pointer lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} className="size-6" />
      </div>

      {
        showMenu && (
          <HomeMenu 
            closeAction={() => setShowMenu(false)}
          />
        )
      }
    </header>
  )
}