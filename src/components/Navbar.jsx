import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container bg-[#FBEBB5]'>
      <navbar className="flex py-[36px] justify-end gap-[100px] mr-[200px]">
        <nav className='flex justify-center gap-[90px] text-[16px]'>
            <a className='text-[16px]' href="/">Home</a>
            <Link to="/SingleProduct">
              Single Product
            </Link>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </nav>
        <div className='flex justify-end gap-[50px]'>
            <img src="../src/assets/mdi_account-alert-outline.svg" alt="Account Alert" />
            <img src="../src/assets/akar-icons_search.svg" alt="Search" />
            <img src="../src/assets/akar-icons_heart.svg" alt="Heart" />
            <img src="../src/assets/ant-design_shopping-cart-outlined.svg" alt="Shopping Cart" />
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;
