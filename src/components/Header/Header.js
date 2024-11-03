import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Menu, Button } from "antd";
import { useAuthContext } from "contexts/AuthContext";
import logo from '../../Assets/logo.png'; // Update the path as necessary

export default function Header() {
  const { isAuthenticated } = useAuthContext();
  const nav = useRef(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const updateCounts = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCartCount(cartItems.length);
    setWishlistCount(wishlistItems.length);
  };

  useEffect(() => {
    updateCounts();
    window.addEventListener('storage', updateCounts);
    return () => {
      window.removeEventListener('storage', updateCounts);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Restaurant App</span>
      </div>
      <nav className="nav">
        {isAuthenticated ? (
          <Menu mode="horizontal">
            <Menu.Item key="shop">
              <Link to="/products">Shop</Link>
            </Menu.Item>
            <Menu.Item key="account">
              <Link to="/dashboard">
                <UserOutlined /> Account
              </Link>
            </Menu.Item>
            <Menu.Item key="cart">
              <Link to="/cart">
                <Badge count={cartCount} style={{ backgroundColor: '#f5222d' }}>
                  <ShoppingCartOutlined />
                </Badge> Cart
              </Link>
            </Menu.Item>
            <Menu.Item key="wishlist">
              <Link to="/wishlist">
                <Badge count={wishlistCount} style={{ backgroundColor: '#f5222d' }}>
                  <HeartOutlined />
                </Badge> Wishlist
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/auth/login">Login</Link>
            </Menu.Item>
          </Menu>
        )}
      </nav>
    </header>
  );
}
