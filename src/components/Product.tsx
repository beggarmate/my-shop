import React, { useEffect, useState } from "react";
import { IProduct } from "./Main";
interface ProductProps {
  product: {
    category: {
      creationAt: string;
      id: number;
      image: string;
      name: string;
      updatedAt: string;
    };
    description: string;
    id?: number;
    price: number;
    rating: { rate: number; count: number };
    title: string;
    updatedAt: string;
    creationAt: any;
    images: any[];
  };
  onClick: React.MouseEventHandler<HTMLDivElement>;
  setBasketPull: ([]) => void;
  basketPull: IProduct[];
}

const Product = ({
  product,
  onClick,
  setBasketPull,
  basketPull,
}: ProductProps) => {
  return (
    <div className="product-box">
      <div className="product__img">
        <img src={product.images[0]} alt="product-image" />
      </div>
      <div onClick={onClick} className="product__title">
        <span>{product.title}</span>
      </div>
      <div className="product__rating">
        <img
          className={
            product.rating.rate < 0.5
              ? "product__rating-05"
              : product.rating.rate >= 0.5 && product.rating.rate < 1
              ? "product__rating-10"
              : product.rating.rate >= 1 && product.rating.rate < 1.5
              ? "product__rating-15"
              : product.rating.rate >= 1.5 && product.rating.rate < 2
              ? "product__rating-20"
              : product.rating.rate >= 2 && product.rating.rate < 2.5
              ? "product__rating-25"
              : product.rating.rate >= 2.5 && product.rating.rate < 3
              ? "product__rating-30"
              : product.rating.rate >= 3 && product.rating.rate < 3.5
              ? "product__rating-35"
              : product.rating.rate >= 3.5 && product.rating.rate < 4
              ? "product__rating-40"
              : product.rating.rate >= 4 && product.rating.rate < 4.5
              ? "product__rating-45"
              : product.rating.rate >= 4.5 && product.rating.rate <= 5
              ? "product__rating-50"
              : ""
          }
          src={require("../images/rating-image.png")}
        />
      </div>
      <p className="product__price">{product.price}$</p>

      <div className="product__category">{product.category.name}</div>
      <div
        className={
          basketPull.find((prod: IProduct) => prod.id === product.id)
            ? "already-in-basket"
            : "product__to-basket-box"
        }
      >
        <button
          disabled={
            basketPull.find((prod: IProduct) => prod.id === product.id)
              ? true
              : false
          }
          onClick={() => {
            setBasketPull([...basketPull, product]);
          }}
        >
          {basketPull.find((prod: IProduct) => prod.id === product.id)
            ? "Добавлено"
            : "В корзину"}
        </button>
      </div>
    </div>
  );
};

export default Product;
