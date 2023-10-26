"use client";

/* Utils */
import { useState } from "react";

/* Components */
import Link from "next/link";
import Image from "next/image";

/* Styles */
import style from "./style.module.scss";

export const Navbar = () => {
  const [showProfileMenu, SetOnClickProfile] = useState(false);
  const onClickProfile = () => {
    SetOnClickProfile(!showProfileMenu);
  };
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <Image
          src="/img/logo.png"
          width={500}
          height={500}
          alt="Logo"
          id="logo"
        />
      </Link>
      <div></div>
    </nav>
  );
};
