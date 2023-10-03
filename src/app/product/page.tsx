import { getSingleProduct, getTrendingProducts } from "@/helpers";
import Container from "../../../components/Container";
import { ProductsProps } from "../../../type";
import ProductsData from "../../../components/ProductsData";
import SingleProduct from "../../../components/SingleProduct";

type ProductProps = {
  searchParams: {[key: string]: string | string[] | undefined}
}

export default async function ProductPage({searchParams}: ProductProps) {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = getSingleProduct(_id);
  const data = await getTrendingProducts();
  
  return (
    <div>
      
      <Container>
        <SingleProduct product = {product}/>
        <p className="text-xl py py-1 font-semibold">Trending Products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {data?.map((item: ProductsProps) => (
            <ProductsData key={item._id} item={item }/>
          ))}
        </div>
      </Container>
    </div>
  )
}
