"use client";
import { useSessionStatus } from "@/hooks/useSessionStatus";
import Image from "next/image"
import Link from "next/link"
import { MouseEvent } from "react";

export const Navbar = () => {
  const {sessionStatus, setSessionStatus, setTokenCookie} = useSessionStatus(null);

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    setTokenCookie("");
    setSessionStatus(false);
  }

  return (
    <nav className="bg-bg-primary w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
            <Image src="/assets/images/logo.webp" width={512} height={512} className="w-20 mr-3" alt="MafiaWeb-Logo"/>
        </Link>
        <ul className="flex justify-around gap-12">
          <li className="flex md:order-2">
            <Link href="/auth/guest" type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-xl px-8 py-2 text-center mr-3 md:mr-0">Jugar</Link>
          </li>
          {
            sessionStatus ? 
              (
                <li className="flex md:order-2">
                    <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-xl px-2 py-2 text-center mr-3 md:mr-0" aria-label="cerrar sesión" onClick={handleClose}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17A8.932 8.932 0 0 0 3 12a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83z"/>
                      </svg>
                    </button>
                </li>
              ): null
          }
        </ul>
      </div>
    </nav>
  )
}
