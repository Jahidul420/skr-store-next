import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { TbCurrencyTaka } from "react-icons/tb";
import { Product, Products } from "../typs/product";
const Cart = (props: {
  showCart: Boolean;
  cartProducts: Products;
  handleShowCart: any;
}) => {
  const { showCart, cartProducts, handleShowCart } = props;
  return (
    <div
      className={`h-screen ${
        showCart ? " translate-x-0" : " translate-x-full"
      } bg-black/30 backdrop-blur-2xl z-50 duration-500 transition-all flex flex-col justify-between w-[420px] border-l fixed top-0 right-0`}
    >
      <NavTopIcon click={( handleShowCart )} />
      <div className="px-4 font-roboto overflow-y-scroll h-full">
        {cartProducts?.map((product, index) => (
          <div key={index}>
            <CartProduct product={product} />
          </div>
        ))}
      </div>
      <div className="w-full h-20 text-center flex justify-center items-center">
        <Link
          href="/checkout"
          className="py-3 text-center bg-transparent border-2 border-white text-white backdrop-blur-3xl px-[170px] rounded-md"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

const NavTopIcon = (props:{click:any}) => {
    const {click} = props;
  return (
    <div className="h-20 w-full flex justify-between items-center text-2xl text-white px-5">
      <button className=" text-4xl" onClick={click}>
        <HiXMark />
      </button>
      <button className="p-2 mr-3 relative">
        <BsHandbag />
        <div
          className={`bg-transparent border-white border h-5 w-5 rounded-full absolute -top-1 -right-2 flex justify-center items-center text-xs duration-300 transition-all`}
        >
          <p>3</p>
        </div>
      </button>
    </div>
  );
};

const CartProduct = (props: { product: Product }) => {
  const { product } = props;
  return (
    <div className="h-28 mb-8 w-full flex justify-between items-center overflow-hidden rounded-md text-black bg-white drop-shadow-md">
      <ProductImge image={product.image} />

      <div className="flex flex-col h-full w-[70%] p-2 justify-between items-start">
        <p className=" text-base font-semibold">{product.name}</p>
        <ProductUnitePrice price={100} />
        <div className="flex justify-between items-center w-full"></div>
        <ProductPrice price={200} />
      </div>

      <div className="flex flex-col justify-between items-center font-oswald h-full w-[12%] text-lg bg-black text-white">
        <button className="px-2 py-2">
          {product.quantity < 2 ? <HiXMark /> : <AiOutlineMinus />}
        </button>
        <p className="text-xl">2</p>
        <button className="px-2 py-2">
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

CartProduct;

const ProductImge = (props: { image: String }) => {
  const { image } = props;
  return (
    <div className="h-full w-[28%]">
      <img
        src={`${image}`}
        alt=""
        className="m-auto object-cover h-full w-auto"
      />
    </div>
  );
};

const ProductUnitePrice = (props: { price: Number }) => {
  const { price } = props;
  return (
    <div className="flex items-center w-full text-xs font-semibold text-gray-800">
      <p>Unite Price - </p>
      <TbCurrencyTaka />
      <p>10</p>
    </div>
  );
};

const ProductPrice = (props: { price: Number }) => {
  const { price } = props;
  return (
    <div className="flex items-center text-xl font-medium font-oswald">
      <TbCurrencyTaka />
      <p>50</p>
    </div>
  );
};
