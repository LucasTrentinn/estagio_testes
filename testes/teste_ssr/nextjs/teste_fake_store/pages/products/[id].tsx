import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { API } from "../../context/api";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await API.get("/products");
  const products: Product[] = res.data

  const paths = products.map((product: Product) => ({
    params: { id: product.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const res = await API.get(`/products/${params.id}`);
  const product: Product = res.data

  return {
    props: {
      product
    }
  }
}

const Product: NextPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src={product.image} alt="" className="w-full h-full object-center group-hover:opacity-75" />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">R${(product.price).toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    </div>
  )
}

export default Product