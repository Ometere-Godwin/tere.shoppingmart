import { productData } from "@/constants/data";

export const getProducts = async()=> {
    // const res = await fetch("http://localhost:3000/api/products");
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
     if (!res.ok){
        throw new Error("failed to fetch products");
     }
     return res.json();
};

 export const getAmazon = async()=>{
   const resAmazonn = await fetch("https://fakestoreapiserver.reactbd.com/nextamazon");
   if (!resAmazonn.ok){
      throw new Error("failed to fetch products");
   }
   return resAmazonn.json();
 };

 export const calculatePercentage = (oldPrice: any, price: any) =>{
   return !!parseFloat(price) && !!parseFloat(oldPrice)
   ?(100 - (oldPrice/price)*100).toFixed(0) 
   :0;
 };

 export const getSingleProduct = (_id: number) => {
  const item = productData.find((product) => product.id === _id)
  return item;
 };

//  For Trending Products
 export const getTrendingProducts = async()=>{
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smarttrending");
  if (!res.ok){
     throw new Error("failed to fetch products");
  }
  return res.json();
};