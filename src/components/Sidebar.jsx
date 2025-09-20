import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full mt-8 ml-4 md:ml-8'>
      <ul className='flex flex-col '>
        <li>
          <Link href={'/home'} >
        Home
          </Link>
        </li>
        <li>
          <Link href={'/all-products'} >
          All Products
          </Link>
        </li>
        <li>
          <Link href={'/view-sales'} >
          View Sales
          </Link>
        </li>
        <li>
          <Link href={'/pending-payments'} >
          Pending Payments
          </Link>
        </li>
        <li>
          <Link href={'/add-product'} >
          Add Product
          </Link>
        </li>
        <li>
          <Link href={'/add-product'} >
          Add Product
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
