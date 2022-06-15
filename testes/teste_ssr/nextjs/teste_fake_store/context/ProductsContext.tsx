import { createContext, ReactNode, useState } from "react";
import { API } from "./api";

interface ProductsContextProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: any[];
  product: any[];
  listAllProducts: () => void;
  getProduct: (id: number) => void;
}

const defaultState = {
  products: [] as any[],
  product: [] as any[],
  listAllProducts: () => {},
  getProduct: (id: number) => {}
}

export const Context = createContext<ProductsContextType>(defaultState);

const ProductsContext = ({ children }: ProductsContextProps) => {
  const [products, setProducts] = useState(defaultState.products)
  const [product, setProduct] = useState(defaultState.product)

  const listAllProducts = async () => {
    const req = await API.get(`/products`)
    setProducts(req.data)
  }

  const getProduct = async (id: number) => {
    const req = await API.get(`/products/${id}`)
    setProduct(req.data)
  }

  return (
    <Context.Provider value={{ products, product, listAllProducts, getProduct }}>
      {children}
    </Context.Provider>
  );
}

export default ProductsContext