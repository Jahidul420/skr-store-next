import { AiFillShop } from "react-icons/ai";

type Props = {};

const PartnarShip = (props: Props) => {
  return (
    <div
      className=" relative h-screen w-full bg-cover bg-fixed flex justify-center items-center"
      id="partnarSection"
    >
      <div className="absolute top-0 left-0 bg-black/80 h-full w-full"></div>

      <div className=" relative z-20">
        <div className="text-center w-4/6 mx-auto text-white">
          <h1 className="text-7xl font-austin leading-none">
            FOR YOUR WELLBEING. FOR YOUR MAJESTY
          </h1>
          <p className="py-10 text-2xl font-austin">PRODUCT PARTNERS INCLUDE</p>
        </div>
        <div className=" flex justify-between items-center w-4/6 mx-auto mt-5">
          <Shops name="Daily Shopping" />
          <Shops name="Unimart" />
          <Shops name="Shawpno" />
          <Shops name="Agora" />
        </div>
        <div className=" flex justify-center items-center w-5/6 mx-auto mt-16">
          <Shops name="Panda Mart" />
        </div>
      </div>
    </div>
  );
};

export default PartnarShip;

const Shops = (props: { name: String }) => {
  const { name } = props;
  return (
    <button className=" flex justify-center items-end text-white gap-3 text-2xl">
      <AiFillShop className="text-4xl" /> {name}
    </button>
  );
};
