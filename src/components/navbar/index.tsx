"use client";

import { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";

export const Navbar = () => {
  const [showProfileMenu, SetOnClickProfile] = useState(true);
  const onClickProfile = () => {
    SetOnClickProfile(!showProfileMenu);
  };
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/1200px-Red_Hat_logo.svg.png"
          alt="Logo"
          id="logo"
        />
      </Link>
      <div id="profileContainer">
        <div id="profile-details" onClick={() => onClickProfile()}>
          <span>Eugenio Manolo</span>
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Profile-Picture"
              id="profile-picture"
            />
            <span>Invitado</span>
          </figure>
        </div>
        {showProfileMenu ? (
          <div id="profile-menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li>Configuración</li>
              <li>Salir</li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
