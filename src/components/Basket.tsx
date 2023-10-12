import React from "react";
import "../styles/basket.scss";
import { IProduct } from "./Main";

interface BasketProps {
  basketPull: IProduct[];
  setBasketPull: any;
  setViewProductPage: any;
  setProductPageChange: any;
}

const Basket = ({
  basketPull,
  setBasketPull,
  setViewProductPage,
  setProductPageChange,
}: BasketProps) => {
  return (
    <div className="basket__page">
      <div className="basket__pay">
        <div className="basket__pay-price">
          {basketPull.reduce((acc, product) => {
            return acc + product.price;
          }, 0)}
        </div>
        <button
          onClick={() => {
            window.open(
              "https://www.tinkoff.ru/cardtocard/",
              "payPage",
              "width=1000,height=800"
            );
          }}
        >
          Оплатить
        </button>
      </div>
      <div className="basket__products">
        {basketPull.map((product: IProduct) => (
          <div key={product.id} className="basket__item">
            <div
              onClick={() => {
                setProductPageChange(product);
                setViewProductPage(true);
              }}
              className="basket__item-img"
            >
              <img src={product.images[0]} alt="Картинка товара" />
            </div>
            <div
              className="basket__item-title"
              onClick={() => {
                setProductPageChange(product);
                setViewProductPage(true);
              }}
            >
              {product.title}
            </div>
            <div className="basket__item-price">{product.price}</div>
            <div className="basket__item-category">{product.category.name}</div>
            <div className="basket__item-remove-btn">Убрать из корзины</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
