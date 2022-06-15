import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { API } from "../../context/api";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await API.get("/products");
  const products: Product[] = res.data

  return {
    props: {
      products
    }
  };
}

const Home: NextPage = ({products}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: Product) => (
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