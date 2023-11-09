import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="bg-bg-primary w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
            <Image src="/assets/images/logo.webp" width={512} height={512} className="w-20 mr-3" alt="MafiaWeb-Logo"/>
        </Link>
        <div className="flex md:order-2">
            <Link href="/auth/guest" type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-8 py-2 text-center mr-3 md:mr-0">Jugar</Link>
        </div>
      </div>
    </nav>
  )
}
