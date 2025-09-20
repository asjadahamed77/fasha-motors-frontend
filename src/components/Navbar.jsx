import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-12 md:px-20 border-b border-mainBlue">
    {/* Logo */}
    <div className="flex items-center gap-4 cursor-pointer">
      <p className="text-mainRed text-[40px] font-semibold">
        F<span className="text-mainBlue text-[25px]">M</span>
      </p>
      <p className="text-mainRed text-[30px] font-semibold">
        Fasha <span className="text-mainBlue">Motors</span>
      </p>
    </div>
    {/* Logout */}
    <button className="cursor-pointer text-sm bg-mainRed text-white px-8 py-2 rounded-full hover:bg-mainRed/80 duration-300 transition-all ease-in-out">
      Logout
    </button>
  </nav>
  )
}

export default Navbar
