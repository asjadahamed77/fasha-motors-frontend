import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-mainBlue text-white px-4 sm:px-12 md:px-20 border-t border-mainRed py-6 sm:py-10 lg:py-12 mt-20">
    {/* Logo */}
    <div className="flex items-center gap-4">
      <p className="text-mainRed text-[40px] font-semibold">
        F<span className="text-white text-[25px]">M</span>
      </p>
      <p className="text-mainRed text-[30px] font-semibold">
        Fasha <span className="text-white">Motors</span>
      </p>
    </div>
    <p className="text-sm tracking-wide max-w-[400px] ">
      Fasha Motors is a one-stop destination for high-quality motorbike
      spare parts and accessories. Whether you’re looking for genuine
      replacements, performance upgrades, or everyday maintenance
      essentials, we provide a wide range of reliable products to keep
      your bike running smoothly.
    </p>
  </footer>
  )
}

export default Footer
