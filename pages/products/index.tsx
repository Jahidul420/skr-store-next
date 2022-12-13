import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillShareFill, BsSuitHeartFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Product, SKU } from "../../typs/product";
type Props = {};

const index = ({}: Props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    })();
  }, []);

  return (
    <motion.div className={`bg-white h-full w-full`} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
      <Nav />

      <div className="h-[60vh] w-full bg-emerald-500 -mt-16 relative flex justify-center items-end">
        <img
          src="/assets/productbg.jfif"
          alt=""
          className=" absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="h-full w-full absolute top-0 left-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="h-[90%] w-full relative flex justify-between items-center px-20">
          <h2 className="text-5xl text-white font-semibold">What are your grateful <br/> for today</h2>
          <img
            src="/assets/allProduct.png"
            alt=""
            className=" object-scale-down h-full w-auto"
          />
        </div>
      </div>
      <div className="w-[55%] py-20 m-auto text-center text-5xl font-austin space-y-5">
        <h2>MEET THE SHUKRAN ALL GREAT PRODUCTS.</h2>
        <p className="font-roboto text-sm">
          100% Australian. 100% natural. The Shukran Garnet plum has been
          lovingly cultivated to be ‘the queen of antioxidants’. The perfect
          sweet union of taste and wellbeing, it’s cherished by nutritionists
          and worshipped by foodies.
        </p>
      </div>
      <div className=" grid grid-cols-4 gap-10 gap-y-20 p-10 ">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default index;

const ProductCard = (props: { product: Product }) => {
  const { product } = props;
  return (
    <div className="h-[500px] w-full overflow-hidden relative">
      <div className=" relative h-[70%] bg-[#fafafa] rounded-md">
        <Link href="/product">
          <img
            src={`${product.image}`}
            alt=""
            className="h-full w-full object-scale-down"
          />
        </Link>
        <div className=" w-full absolute bottom-2 px-3 left-0 flex justify-between text-xl text-gray-300">
          <button className=" hover:text-sky-500 duration-300">
            <BsFillShareFill />
          </button>
          <button>
            <BsSuitHeartFill className=" text-rose-500 duration-300" />
          </button>
        </div>
      </div>

      <div className="text-left h-[30%] flex flex-col justify-between relative">
        <h2 className="h-auto w-full text-base mt-2 font-roboto font-normal">
          {product.name}
        </h2>

        {product.SKUs.map((sk: SKU, index: Number) =>
          sk.active ? (
            <div
              className="flex justify-start items-center text-base font-semibold  w-auto absolute top-2 right-0"
              key={index + ""}
            >
              <TbCurrencyTaka />
              <p className="w-20">{`${sk.price}`}</p>
            </div>
          ) : null
        )}
        <div className="flex justify-around items-center w-full">
          {product.SKUs.map((item, index) => (
            <button
              className={`py-[2px] w-12 text-sm  rounded-md duration-500 ${
                item.active ? "bg-black text-white" : "bg-[#fafafa]"
              }`}
              key={index}
            >
              <>
                {item.size} <span className="text-xs">KG</span>
              </>
            </button>
          ))}
        </div>
        <div>
          <button className=" w-full h-10 bg-gray-100 rounded-md font-roboto font-base">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
