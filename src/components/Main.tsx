import React, { useEffect, useState } from "react";
import "../styles/main.scss";
import Product from "./Product";
import Loader from "./Loader";
import FilterBox from "./FilterBox";
import ProductPage from "./ProductPage";
import Basket from "./Basket";

export interface IProduct {
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
}
interface MainProps {
  selectedSort: any;
  sortProducts: any;
  products: IProduct[];
  addProduct: any;
  setProducts: any;
  viewBasket: boolean;
  viewProductPage: boolean;
  setViewProductPage: any;
  setBasketPull: any;
  basketPull: IProduct[];
}

const Main = ({
  selectedSort,
  sortProducts,
  products,
  addProduct,
  setProducts,
  viewBasket,
  viewProductPage,
  setViewProductPage,
  setBasketPull,
  basketPull,
}: MainProps) => {
  const [productPageChange, setProductPageChange] = useState<IProduct | null>(
    null
  );

  const createHandler = (product: IProduct) => {
    addProduct(product);
  };

  return (
    <main>
      <div className="main__container main__box">
        {viewProductPage ? (
          <ProductPage
            product={productPageChange}
            basketPull={basketPull}
            setBasketPull={setBasketPull}
          />
        ) : viewBasket ? (
          <Basket
            basketPull={basketPull}
            setBasketPull={setBasketPull}
            setViewProductPage={setViewProductPage}
            setProductPageChange={setProductPageChange}
          />
        ) : (
          <>
            <FilterBox
              selectedSort={selectedSort}
              sortProducts={sortProducts}
              createHandler={createHandler}
            />
            <div className="main__content">
              {products[0] ? (
                products.map((product) => {
                  return (
                    <Product
                      onClick={(e) => {
                        setProductPageChange(product);
                        setViewProductPage(true);
                      }}
                      key={product.id}
                      product={product}
                      basketPull={basketPull}
                      setBasketPull={setBasketPull}
                    ></Product>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
