import { motion } from "framer-motion";
import { useState } from "react";
import {
  AiFillGift,
  AiFillHome,
  AiFillPlusCircle,
  AiFillStar,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { BsCartCheckFill, BsFacebook, BsFillCartXFill } from "react-icons/bs";
import {
  FaBoxOpen,
  FaCrown,
  FaHeart,
  FaMapMarkedAlt,
  FaMoneyBillAlt
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { ImOffice } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { Cell, Legend, Pie, PieChart } from "recharts";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
const Profile = () => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    return setEdit(!edit);
  };
  return (
    <div>
      <Nav />
      <div className="w-full h-auto -mt-20 bg-gray-100 pb-12">
        <ProfileBanner click={toggleEdit} />
        {edit ? <EditProfile /> : null}
        <div className="w-[90vw] mx-auto space-y-12">
          <div className="w-full flex h-[400px] gap-x-12">
            {/* WIN GIFT BOX STATUS */}
            <div className="w-3/6 flex flex-col justify-between h-full bg-white rounded-lg py-8 px-10 drop-shadow-sm">
              <p className="text-lg font-semibold text-gray-600">
                Purches To Win Gift Box
              </p>
              <PurchesGift
                icon={<AiFillGift />}
                image="/assets/png/najirshail.png"
                color="bg-sky-400"
                textColor="text-sky-400"
                width={"w-[90%]"}
              />
              <PurchesGift
                icon={<AiFillGift />}
                image="/assets/png/dChinigura.png"
                color="bg-stone-500"
                textColor="text-stone-500"
                width={"w-[20%]"}
              />
              <PurchesGift
                icon={<FaBoxOpen />}
                image="/assets/png/katari.png"
                color="bg-purple-800"
                textColor="text-purple-800"
                width={"w-[100%]"}
              />
              <PurchesGift
                icon={<AiFillGift />}
                image="/assets/png/miniket.png"
                color="bg-lime-400"
                textColor="text-lime-400"
                width={"w-[70%]"}
              />
            </div>
            {/* PORFILE ALL STATUS  */}
            <TotalStatus />
          </div>
          {/* RECENT PURCHES STATUS SECTION  */}
          <div className="h-[400px] w-full flex justify-between gap-x-12 items-center">
            <div className="w-[60%] h-full bg-white rounded-lg py-3 px-8">
              <p className=" text-lg font-semibold text-gray-600">
                Recent Purches
              </p>
              <div className="w-full h-auto overflow-y-scroll">
                <RecentPurchesProducts />
              </div>
            </div>
            {/* PICHART */}
            <div className="w-[40%] h-full bg-white rounded-lg py-3 px-4 drop-shadow-sm">
              <p className=" text-lg font-semibold text-gray-600 text-center">
                Over View
              </p>
              <PiChartStatue />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

const ProfileBanner = (props: { click: any }) => {
  const { click } = props;
  return (
    <>
      <div className="h-[400px] w-full bg-black overflow-hidden flex justify-center items-center text-white text-7xl text-center font-austin">
        <div>
          <p className=" text-4xl">SHUKRAN</p>
          <h2>GRATITUDE INBOUND</h2>
        </div>
        <img
          src="/assets/pattern.png"
          alt=""
          className=" h-auto w-full object-cover absolute top-0 left-0 opacity-20"
        />
      </div>
      <div className=" w-[90vw] h-auto flex justify-between py-4 mx-auto relative bg-gray-100">
        <div className=" relative flex w-3/6">
          <div className="h-[200px] w-[200px] rounded-full overflow-hidden drop-shadow-xl relative -top-20 left-0">
            <img
              src="/assets/nobita.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" text ml-8 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <h2 className=" text-2xl mb-2 font-bold">JAHIDUL ISLAM </h2>
              <button className="text-xl mb-2" onClick={click}>
                <FiEdit />
              </button>
            </div>
            <p>01234567899</p>
            <p>Join Date: 30/12/22</p>
          </div>
        </div>

        <div className=" flex items-center h-10 w-64 text-4xl justify-between">
          <p className="text-sm font-semibold">Socain Media</p>
          <button className="text-sky-500 text-3xl">
            <BsFacebook />
          </button>
          <button className="text-rose-500">
            <AiOutlineInstagram />
          </button>
          <button className="text-sky-500">
            <AiOutlineTwitter />
          </button>
        </div>
      </div>
    </>
  );
};

const EditProfile = () => {
  const [showMap, setShowMap] = useState(false);
  const toggleMap = () => {
    return setShowMap(!showMap);
  };
  return (
    <motion.div
      className="w-[90vw]  mx-auto h-auto mb-16 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full h-[550px] flex justify-between items-center gap-x-14">
        <div className="w-3/6 h-full px-10 py-8 bg-white rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-start text-2xl  text-gray-600 h-[15%]">
            <button className="text-black">
              <AiFillHome />
            </button>
            <button className="text-black">
              <ImOffice />
            </button>
            <button>
              <FaHeart />
            </button>
            <button>
              <AiFillPlusCircle />
            </button>
          </div>
          <div className="h-[85%] w-full flex flex-col justify-between ">
            <CurrentAddress name="City Name" address="Notun Bazar" />
            <CurrentAddress name="Area Name" address="Nura Chala" />
            <CurrentAddress name="Road Name" address="100 Fit" />
            <CurrentAddress name="Bulding Name" address="Green Land T-11" />
            <CurrentAddress
              name="Map Location"
              address="https://goo.gl/maps/SjYrN7oGxnfg5cT58"
            />
            <CurrentAddress
              name="Address Note"
              address="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error officiis dolore fugiat omnis deserunt placeat, suscipit officia dicta alias sunt."
            />
          </div>
        </div>
        <div className="w-3/6 px-10 py-8 h-full bg-white rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-start text-sm  text-black h-[10%]">
            <button className="flex items-center gap-2" onClick={toggleMap}>
              <FaMapMarkedAlt className="text-2xl" /> Map Location
            </button>
          </div>
          {showMap ? (
            <div className=" h-[90%] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4248.321680179611!2d90.4240677016413!3d23.796409435429595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1670934920320!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ) : (
            <>
              <form
                className=" h-[75%] flex flex-col justify-between "
                autoComplete="on"
              >
                <input
                  autoFocus={true}
                  autoComplete="off"
                  type="text"
                  placeholder="City Name"
                  className="w-full h-10 border-b-2 border-gray-500 bg-transparent outline-none placeholder:text-black"
                />
                <input
                  autoFocus={true}
                  autoComplete="off"
                  type="text"
                  placeholder="Area Name"
                  className="w-full h-10 border-b-2 border-gray-500 bg-transparent outline-none placeholder:text-black"
                />
                <input
                  autoFocus={true}
                  autoComplete="off"
                  type="text"
                  placeholder="Road Number Or Name"
                  className="w-full h-10 border-b-2 border-gray-500 bg-transparent outline-none placeholder:text-black"
                />

                <input
                  autoFocus={true}
                  autoComplete="off"
                  type="text"
                  placeholder="Bulding Name"
                  className="w-full h-10 border-b-2 border-gray-500 bg-transparent outline-none placeholder:text-black"
                />
                <textarea
                  className="w-full h-20 border-b-2 border-gray-500 bg-transparent outline-none placeholder:text-black"
                  placeholder="Type somthing about your Address..."
                  id="txtid"
                  name="txtname"
                  maxLength={200}
                ></textarea>
              </form>
              <div className=" w-full flex justify-between items-end gap-10 h-[15%] ">
                <button className="w-full h-10 bg-red-500 text-white rounded-md">
                  Clear
                </button>
                <button className="w-full h-10 bg-emerald-500 text-white rounded-md">
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
const CurrentAddress = (props: { name: String; address: String }) => {
  const { name, address } = props;
  return (
    <div className="flex items-center gap-3 text-base text-black w-full font-medium">
      <p className="w-[25%]">{name}</p>
      <p className="w-[5%]">:</p>
      <p className="w-[70%] text-gray-700 font-normal">{address}</p>
    </div>
  );
};
const PurchesGift = (props: {
  image: String;
  color: String;
  width: String;
  textColor: String;
  icon: any;
}) => {
  const { image, color, width, textColor, icon } = props;
  return (
    <div className=" flex items-center w-full h-[20%] justify-between">
      <div className="h-full w-[15%] flex justify-start items-center">
        <img
          src={`${image}`}
          alt=""
          className=" h-full w-auto object-scale-down"
        />
      </div>
      <div className=" h-[10px] rounded-full w-[90%] bg-gray-200 relative overflow-hidden">
        <div
          className={` ${color} ${width} absolute top-0 left-0 h-full`}
        ></div>
      </div>
      <div
        className={`${textColor} w-[10%] text-3xl ml-auto mb-1 flex justify-center items-center`}
      >
        {icon}
      </div>
    </div>
  );
};

const TotalStatus = () => {
  return (
    <div className="flex w-3/6 px-10 py-8 justify-between gap-6 items-center h-full bg-white rounded-lg drop-shadow-sm">
      <div className=" w-3/6 flex flex-col justify-between h-full gap-2">
        <StatusCard
          name="Total Purches"
          number={20}
          icon={<BsCartCheckFill />}
          color="text-emerald-400"
        />
        <StatusCard
          name="Total Transition"
          number={9500}
          icon={<FaMoneyBillAlt />}
          color="text-emerald-500"
        />
        <StatusCard
          name="Total Return"
          number={0}
          icon={<BsFillCartXFill />}
          color="text-red-500"
        />
      </div>
      <div className=" w-3/6 flex flex-col justify-between h-full gap-2">
        <StatusCard
          name="Rank"
          number={2}
          icon={<FaCrown />}
          color="text-purple-500"
        />
        <StatusCard
          name="Win Reward"
          number={7}
          icon={<AiFillGift />}
          color="text-rose-500"
        />

        <StatusCard
          name="Total Star"
          number={10}
          icon={<AiFillStar />}
          color="text-yellow-400"
        />
      </div>
    </div>
  );
};

type Props = {
  name: String;
  number: Number;
  color: String;
  icon: any;
};
const StatusCard = (props: Props) => {
  const { color, icon, name, number } = props;
  return (
    <div className="h-[25%] w-full p-2 flex items-center bg-gray-100 rounded-md drop-shadow-sm">
      <div className={`text-4xl px-3 ${color}`}>{icon}</div>
      <div className=" text-gray-700">
        <p className="text-base font-semibold">{name}</p>
        <p className="text-2xl font-bold">{`${number}`}</p>
      </div>
    </div>
  );
};

const PiChartStatue = () => {
  type Data = {
    name: String;
    value: Number;
  };
  const data: Data[] = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </PieChart>
    </div>
  );
};

const RecentPurchesProducts = () => {
  return (
    <>
      <div className="flex justify-between items-center text-xs font-normal text-center py-3">
        <p className="w-[10%] text-left">IMAGE</p>
        <p className="w-[40%] text-left">NAME</p>
        <p className="w-[15%]">DATE</p>
        <p className="w-[10%]">QUANTITY</p>
        <p className="w-[10%]">K.G</p>
        <p className="w-[15%]">PRICE</p>
      </div>

      {/* {wish?.map((product, index) => ( */}
      <div className="flex justify-between items-center font-medium h-16 w-full text-xs text-center text-gray-600 my-3">
        <div className="w-[10%] h-full items-center flex">
          <div className="h-14 w-14 rounded-full bg-gray-300">
            <img
              src="/assets/png/chinigura.png"
              alt=""
              className="h-full w-auto object-scale-down mx-auto"
            />
          </div>
        </div>
        <h2 className="w-[40%] font-roboto text-sm text-left">
          Chinigura Boil Rice
        </h2>
        <div className="w-[15%]">10-JUN-23</div>
        <div className="w-[10%]">2</div>
        <div className="w-[10%]">25</div>
        <div className="w-[15%] flex justify-center items-center font-roboto text-sm">
          <TbCurrencyTaka />
          200
        </div>
      </div>
      {/* ))} */}
    </>
  );
};
