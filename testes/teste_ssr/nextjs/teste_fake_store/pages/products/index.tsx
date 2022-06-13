import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { Context } from "../../context/ProductsContext";

const Home: NextPage = () => {
  const { products, listAllProducts } = useContext(Context);

  useEffect(() => {
    listAllProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <a className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img src={product.image} alt="" className="w-full h-full object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">R${(product.price).toFixed(2).replace('.', ',')}</p>
              </a>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home