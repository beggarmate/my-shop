import React, { useState } from "react";
import "../styles/header.scss";
import { useProducts } from "../hooks/products";
import { IProduct } from "./Main";
import ModaleWindow from "./ModaleWindow";

interface HeaderProps {
  setProducts: any;
  products: IProduct[];
  searchQuery: string;
  setSearchQuery: any;
  setViewBasket: any;
  setViewProductPage: any;
}

const Header = ({
  setProducts,
  products,
  searchQuery,
  setSearchQuery,
  setViewBasket,
  setViewProductPage,
}: HeaderProps) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <header className="header">
      {searchActive ? <ModaleWindow>{null}</ModaleWindow> : null}

      <div className="header__container header__content">
        <div
          onClick={() => {
            setViewBasket(false);
            setViewProductPage(false);
          }}
          className="header__logo"
        >
          <img
            src={require("../images/myshop-logo.png")}
            alt="Логотип MyShop"
          />
        </div>
        <div className="header__search">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
              onFocus={() => {
                setSearchActive(true);
              }}
              onBlur={() => {
                setSearchActive(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setViewBasket(false);
                  setSearchQuery(searchText);
                  setSearchActive(false);
                } else setSearchActive(true);
              }}
              type="text"
            />
            <span
              onClick={() => {
                setSearchQuery(searchText);
                setViewBasket(false);
                setViewProductPage(false);
              }}
              className="header__search-span"
            >
              <img src={require("../images/search-image.png")} alt="Поиск" />
            </span>
          </form>
        </div>
        <div
          onClick={() => {
            setViewBasket(true);
            setViewProductPage(false);
          }}
          className="header__basket"
        >
          <div className="basket__logo">
            <a href="#">
              <img src={require("../images/basket.png")} alt="Корзина" />
            </a>
          </div>
          <div className="basket__title">КОРЗИНА</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
