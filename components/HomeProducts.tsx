import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Product } from "../typs/product";

type Props = {};

const HomeProducts = (props: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    })();
  }, []);

  return (
    <div className={`bg-[#43283A] text-white px-14 py-32 h-auto w-full`}>
      <div className="w-[55%] m-auto text-center text-5xl font-austin space-y-5">
        <h2>MEET THE SHUKRAN GREAT PRODUCTS</h2>
        <p className="font-roboto text-sm">
          100% Australian. 100% natural. The Queen Garnet plum has been lovingly
          cultivated to be ‘the queen of antioxidants’. The perfect sweet union
          of taste and wellbeing, it’s cherished by nutritionists and worshipped
          by foodies.
        </p>
      </div>

      <div className=" relative h-auto w-full">
        {products.map((product: Product, index) => (
          <div
            className={` flex ${
              index % 2 === 0 ? null : "flex-row-reverse ml-auto"
            } h-[700px] max-w-7xl items-center justify-between gap-20`}
            key={product.id + ""}
          >
            <ProductImage image={product.image} />
            <div className="w-[40%] ">
              <div className="space-y-5 ">
                <div className="">
                  <Link
                    href="/product"
                    className="text-5xl font-medium font-lora"
                  >
                    {product.name}
                    <p className="text-lg mt-2 font-medium font-austin">
                      {product.subTitle}
                    </p>
                  </Link>
                </div>
                <PriceAndKgsDiv product={product} />
                <p className="text-md pb-2 mr-5 text-justify font-roboto">
                  {product.discription}
                </p>
                <WishAndShare />
                <div className="flex items-center gap-5 font-roboto text-sm">
                  <Link
                    href="/product"
                    className={`border-2 bg-white text-black border-white rounded-full px-8 py-[10px] hover:scale-110 duration-300`}
                  >
                    View Product
                  </Link>
                  <button
                    className={` border-2 bg-transprent text-white border-white rounded-full px-8 py-[10px] hover:scale-110 duration-300 `}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;

const ProductImage = (props: { image: String }) => {
  const { image } = props;
  return (
    <div className=" w-[60%]">
      <div
        className={` p-5 h-[630px] w-[620px] bg-[#381F30] rounded-full  relative group mx-auto`}
      >
        <div
          className={`duration-300 group-hover:scale-105 h-full w-full  rounded-full bg-[#381F30] absolute top-0 left-0 transition-all`}
        ></div>
        <img
          src={`${image}`}
          alt=""
          className="h-full w-full relative object-scale-down "
        />
      </div>
    </div>
  );
};

const WishAndShare = () => {
  return (
    <div className="flex items-center gap-5 text-xl">
      <Link href="/product" className="text-xs underline">
        LEARN MORE
      </Link>
      <button>
        <BsSuitHeartFill className=" text-rose-500 duration-300" />
      </button>
      <button className=" hover:text-sky-500 focus:text-sky-500 duration-300">
        <HiOutlineShare />
      </button>
    </div>
  );
};

const PriceAndKgsDiv = (props: { product: Product }) => {
  const { product } = props;

  return (
    <div className="flex items-center text-2xl font-oswald">
      {product.SKUs.map((sk, index) =>
        sk.active ? (
          <div key={index} className="flex items-center">
            <TbCurrencyTaka />
            <p className="w-20" >{`${sk.price}`}</p>
          </div>
        ) : null
      )}
      <div className="text-sm space-x-5 ml-5 font-normal font-roboto">
        {product.SKUs.map((item, index) => (
          <button
            className={`py-[2px] px-2 border rounded-full ${
              item.active ? "bg-white text-black border-white" : ""
            } duration-500`}
            key={index}
          >
            {item.size + " KG"}
          </button>
        ))}
      </div>
    </div>
  );
};
