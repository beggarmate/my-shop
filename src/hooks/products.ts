import { useState, useEffect, useMemo } from "react";

interface IProduct {
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
  images: any;
}

function getRating(obj: any): any {
  return { ...obj, rating: { count: 1, rate: Math.random() * 5 } };
}

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=50"
      );
      let result = await response.json();
      result = result.map((product: any) => getRating(product));
      setProducts(result);
    } catch (error: any) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function addProduct(product: IProduct) {
    setProducts([...products, product]);
  }

  const [selectedSort, setSelectedSort] = useState<string>("");
  const [filtredSort, setFiltredSort] = useState<string>("");

  const sortedProducts: IProduct[] = useMemo(() => {
    if (selectedSort) {
      return [...products].sort((a: any, b: any) => {
        if (selectedSort === "price") {
          return a.price - b.price;
        }
        if (selectedSort === "name") {
          return a.title.localeCompare(b.title);
        }
        if (selectedSort === "rating") {
          return a.rating.rate - b.rating.rate;
        }
      });
    }
    return products;
  }, [selectedSort, products]);

  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.name.toLowerCase().includes(searchQuery.toLowerCase())
        ? true
        : false;
    });
  }, [searchQuery, sortedProducts]);

  const sortProducts = (sort: string) => {
    setSelectedSort(sort);
  };

  return {
    selectedSort,
    products,
    sortProducts,
    sortedProducts,
    addProduct,
    setProducts,
    searchQuery,
    setSearchQuery,
    sortedAndSearchedProducts,
    error,
  };
}
