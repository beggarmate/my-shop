import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main, { IProduct } from "./components/Main";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { useProducts } from "./hooks/products";

function App() {
  const [viewBasket, setViewBasket] = useState(false);
  const [viewProductPage, setViewProductPage] = useState(false);
  const [basketPull, setBasketPull] = useState<IProduct[]>([]);

  const {
    selectedSort,
    sortProducts,
    addProduct,
    setProducts,
    searchQuery,
    setSearchQuery,
    sortedAndSearchedProducts,
    error,
  } = useProducts();

  return error ? (
    <Error />
  ) : (
    <div className="App">
      <Header
        products={sortedAndSearchedProducts}
        setProducts={setProducts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setViewBasket={setViewBasket}
        setViewProductPage={setViewProductPage}
      />
      <Main
        basketPull={basketPull}
        selectedSort={selectedSort}
        sortProducts={sortProducts}
        products={sortedAndSearchedProducts}
        addProduct={addProduct}
        setProducts={setProducts}
        viewBasket={viewBasket}
        viewProductPage={viewProductPage}
        setViewProductPage={setViewProductPage}
        setBasketPull={setBasketPull}
      />
      <Footer />
    </div>
  );
}

export default App;
