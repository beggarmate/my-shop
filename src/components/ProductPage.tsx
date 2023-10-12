import React from "react";
import { IProduct } from "./Main";

interface ProductPageProps {
  product: IProduct | null;
  setBasketPull: ([]) => void;
  basketPull: IProduct[];
}

const ProductPage = ({
  product,
  setBasketPull,
  basketPull,
}: ProductPageProps) => {
  return (
    <div className="product-page">
      <div className="product-page__top">
        <div className="product-page__top-left">
          <img src={product?.images[0]} alt="Картинка товара" />
        </div>
        <div className="product-page__top-right">
          <div className="product-page__top-title">{product?.title}</div>
          <div className="product-page__top-buy-box">
            <div className="product-page-price">
              <div className="price-box">
                <div className="price-box__full-price">{product?.price}$</div>
                <div className="price-box__credit-price">
                  {product?.price ? (product?.price / 12).toFixed(2) : 0}$
                  <p>в месяц</p>
                </div>
              </div>
              <button
                disabled={
                  product
                    ? basketPull.find(
                        (prod: IProduct) => prod.id === product.id
                      )
                      ? true
                      : false
                    : false
                }
                onClick={() => {
                  setBasketPull([...basketPull, product]);
                }}
                className={
                  product
                    ? basketPull.find(
                        (prod: IProduct) => prod.id === product.id
                      )
                      ? "page-already-in-basket"
                      : "in-basket-btn"
                    : "in-basket-btn"
                }
              >
                {product
                  ? basketPull.find((prod: IProduct) => prod.id === product.id)
                    ? "Добавлено"
                    : "В корзину"
                  : "В корзину"}
              </button>
            </div>
            <div className="product-page__rating-category">
              <div className="product-page__rating">
                {" "}
                <img
                  className={
                    product
                      ? product.rating.rate < 0.5
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
                      : ""
                  }
                  src={require("../images/rating-image.png")}
                />
              </div>
              <div className="product-page__category">
                {product?.category.name}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="product-page__bottom">{product?.description}</p>
    </div>
  );
};

export default ProductPage;
