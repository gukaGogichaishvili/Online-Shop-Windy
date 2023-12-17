import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useSearch } from '../context/SearchContext';
import SearchBar from '../components/SearchBar';
import { Avatar } from '../components';

const Header = () => {
  const { token, logout } = useContext(AuthContext);
  const { cart } = useContext(ShoppingCartContext);


  


  const handleLogout = () => {
    
    logout();

  };


 
    return (
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <div className="text-xl font-bold">
              <img src="/public/assets/logo.png" alt="Logo" className='h-12 w-13' />
            </div>
          </Link>
          <Link to="/products">Products</Link>
          <SearchBar />
        </div>
  
        <div className="flex items-center space-x-4">
          {token && (
            <div className="relative group">
              <Avatar />
              <div className="absolute hidden group-hover:block right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden">
                <Link to="/profile" className="block px-4 py-2 text-gray-800">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-800"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
  
          <Link to="/cart" className="flex items-center space-x-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
            <span>{cart.length}</span>
          </Link>
        </div>
        <div onClick={() => {console.log(localStorage.getItem("authData"))}}>GENERAL USER DATA</div>
        <button
                  onClick={handleLogout}
                  className="block px-4 py-2"
                >
                  Logout
                </button>
      </div>
    );
  };


export default Header;