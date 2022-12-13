
type Props = {}

const HomeMap = (props: Props) => {
  return (
    <div className="h-screen w-full relative py-40">
      <img
        src="/assets/worldmap.jpg"
        alt=""
        className="h-full w-full object-cover absolute top-0 left-0"
      />
      <div className="h-full w-full absolute top-0 left-0 bg-black/70"></div>
      <div className="h-full w-full text-white flex flex-col justify-center items-center relative">
        <h1 className="t w-[60%] text-center font-austin text-8xl">
          WE'RE ALL OVER THE CITY
        </h1>
        <button className="px-10 mt-20 py-3 rounded-full bg-white text-black font-oswald">
          FIND A SHOP
        </button>
      </div>
    </div>
  );
}

export default HomeMap