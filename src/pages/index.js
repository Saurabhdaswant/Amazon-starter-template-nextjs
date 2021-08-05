import Head from "next/head";
import Baner from "../components/Baner";
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed";
export default function Home( { products } ) {
  return (
    <div className="bg-gray-100" >
      <Head>
        <title>Manav cha Dukaan</title>
      </Head>
      <Header/>

      <main className="max-w-screen-2xl mx-auto" >
        {/* banner */}
        <Baner/>
        {/* product feed  */}
        <ProductFeed products={products} />

      </main>
    </div>
  );
}

export async function getServerSideProps(context){
const products = await fetch("https://fakestoreapi.com/products")
.then( (res) => res.json());
return {
  props:{
     products : products,
  },
};
}
