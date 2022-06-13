import { createContext, ReactNode, useState } from "react";
import { API } from "./api";

interface ProductsContextProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: any[];
  listAllProducts: () => void;
}

const defaultState = {
  products: [] as any[],
  listAllProducts: () => {}
}

export const Context = createContext<ProductsContextType>(defaultState);

const ProductsContext = ({ children }: ProductsContextProps) => {
  const [products, setProducts] = useState(defaultState.products)

  const listAllProducts = async () => {
    const req = await API.get(`/products`)
    setProducts(req.data)
  }

  return (
    <Context.Provider value={{ products, listAllProducts }}>
      {children}
    </Context.Provider>
  );
}

export default ProductsContext