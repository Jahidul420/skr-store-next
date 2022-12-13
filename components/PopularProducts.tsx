import { useEffect, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Product } from "../typs/product";
type Props = {};

const PopularProducts = (props: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    })();
  }, []);
  return (
    <div className={` px-40 py-32 bg-[#43283A]`}>
      <div className={` text-center text-white font-austin text-5xl`}>
        <div className="w-[55%] m-auto text-center text-5xl font-austin space-y-5">
          <h2>OUR POPULARS POPULAR PRODUCTS </h2>
          <p className="font-roboto text-sm">
            100% Recomended and plepoles love it somuch
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-2 py-2 text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="flex items-center justify-between relative mt-20">
        {products
          .filter((item: Product) => !item.isPopular)
          .map((product: Product, index: Number) => {
            return (
              <div key={index + ""}>
                <PopularCart product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularProducts;

const PopularCart = (props: { product: Product }) => {
  const { product } = props;
  return (
    <div className=" w-full rounded-xl  bg-transparent relative group">
      <div
        className={`bg-[#381F30] h-[460px] w-[450px] absolute -top-8 -left-6 rounded-full opacity-0 group-hover:opacity-100 duration-200 group-hover:scale-110`}
      ></div>
      <div className="relative">
        <div className="w-full h-[400px]">
          <img
            src={`${product?.image}`}
            alt=""
            className=" h-full w-full object-scale-down group-hover:rotate-6 duration-500 group-hover:scale-105"
          />
        </div>

        <div className={`text-center px-2 text-white w-full space-y-4`}>
          <h2 className="text-2xl font-austin ">{product?.name}</h2>
          <ProductPrice product={product} />
          <p className="w-[80%] m-auto text-md font-light">
            Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but
          </p>
          <div className="flex justify-center items-center w-full px-4">
            <button
              className={`px-5 py-3 bg-white text-black border-white rounded-full border-2 font-oswald hover:scale-110 duration-300 text-sm flex justify-center items-center gap-2`}
            >
              <MdOutlineShoppingCart />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPrice = (props: { product: Product }) => {
  const { product } = props;
  return (
    <div className="flex items-center justify-center font-roboto">
      <p className="flex justify-center items-center text-xl font-oswald">
        <>
          <TbCurrencyTaka />
          {product?.SKUs.map((item) => (item.active ? item.price : null))}
        </>
      </p>
      <p className=" text-xs font-roboto mx-1">(Uinte Price) </p>
      <button>
        <BsSuitHeartFill className=" text-rose-500 duration-300" />
      </button>
    </div>
  );
};

const KgsButton = (props: { product: Product }) => {
  const { product } = props;
  return (
    <div className="text-sm font-normal font-roboto flex justify-between items-center w-full">
      {product?.SKUs.map((item, index) => (
        <button
          className={`py-[2px] px-2 border rounded-full ${
            item.active ? "bg-black text-white" : " bg-gray-50"
          } duration-500`}
        >
          {item.size + " KG"}
        </button>
      ))}
    </div>
  );
};
