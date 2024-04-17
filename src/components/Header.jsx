import Logo from "/images/logo.svg";
import cartIcon from "/images/icon-cart.svg";
import imgProfile from "/images/image-avatar.png";
import toggleMenu from "/images/icon-menu.svg";
import toggleClose from "/images/icon-close.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { Cart } from "./Cart";
import { useStore } from "./store";
export function Header() {
  const [menu, setMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);
  const classNameCart = showCart ? "cart-container show" : "cart-container";
  const classNameMenu = menu ? "nav show" : "nav";
  const classNameToggle = menu ? "toggle-menu fixed" : "toggle-menu";
  const cartClassname =
    cart.length > 0
      ? "cari-icon-container cursor-pointer"
      : " cursor-pointer cari-icon-container";
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleCart = () => {
    if (showPanel) {
      setShowPanel(false);
    }
    setShowCart(!showCart);
  };
  const handleClick = () => {
    setMenu(false);
    showCart(false);
  };
  const handleShow = () => {
    if (showCart) {
      setShowCart(false);
    }
    setShowPanel(!showPanel);
  };
  const handleNavigate = (e) => {
    e.preventDefault();
    //borrar el usuario del local storage

    //navegar hacia login page
    navigate("/login");
  };
  return (
    <header className="header w-full max-w-[1280px] mx-auto">
      <div className="header__section">
        <picture className={classNameToggle} onClick={handleMenu}>
          <img
            src={menu ? toggleClose : toggleMenu}
            alt="toggle img"
            className="toggle"
          />
        </picture>
        <picture className="logo-container">
          <img src={Logo} alt="Logo img" className="logo" />
        </picture>
        <nav className={classNameMenu}>
          <ul className="menu">
            <li className="menu__item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                Collection
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/men"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                Men
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/women"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                Women
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "menu__link "
                    : isActive
                    ? "menu__link active"
                    : "menu__link ";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__section relative cursor-pointer">
        <picture className={cartClassname} onClick={handleCart}>
          {cart.length > 0 && <p className="tag">{cart.length}</p>}
          <img src={cartIcon} alt="Cart-icon" className="cart-icon" />
        </picture>
        <picture
          onClick={handleShow}
          className={`${
            showPanel ? "border-2 border-orange-400 rounded-full" : ""
          }`}
        >
          <img src={imgProfile} alt="img Profile" className="profile-img" />
        </picture>
        <section
          className={`flex absolute w-56 -right-2 top-10 z-50 flex-col gap-2 bg-zinc-200 p-2 rounded-sm shadow-sm ${
            showPanel ? "block" : "hidden"
          }`}
        >
          <Link
            to="/setting"
            className="flex gap-3 hover:font-semibold transition-all duration-300 ease-linear"
          >
            <img
              src="/images/icon-account.svg"
              className="w-6 h-6"
              alt="Setting icon"
            />
            Account Setting
          </Link>
          <Link
            to="/login"
            className="flex gap-3 border-t pt-1 border-zinc-400 hover:font-semibold transition-all duration-300 ease-linear"
            onClick={handleNavigate}
          >
            <img
              src="/images/icon-logout.svg"
              className="w-6 h-6"
              alt="Log out icon"
            />
            Log out
          </Link>
        </section>
      </div>
      <div className={classNameCart}>
        <Cart />
      </div>
    </header>
  );
}
