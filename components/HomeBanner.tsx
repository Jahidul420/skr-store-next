import Link from "next/link";
import {
    AiFillYoutube,
    AiOutlineInstagram,
    AiOutlineTwitter
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

type Props = {}

const HomeBanner = (props: Props) => {
  return (
    <div className=" -mt-16 relative h-[100vh] w-full overflow-hidden">
      <video
        src="/assets/tvc.mp4"
        autoPlay
        muted
        loop
        className=" object-cover h-full scale-110 w-full"
        
      ></video>

      <div className="bg-black/70 absolute top-0 left-0 w-full h-full z-5"></div>

      <div className=" absolute top-0 left-0 h-full w-full text-white px-10">
        <div className="h-[80%] flex flex-col justify-center font-austin">
          <h2 className="text-4xl ">SHUKRAN</h2>
          <h1 className="text-8xl font-medium">
            GRATITUDE <br></br> BOUND
          </h1>
        </div>
        <div className="h-[20%] w-full  flex justify-between items-center text-sm">
          <div className="w-3/6 flex mr-40 space-x-6">
            <div className="space-y-3">
              <p className="text-xl font-semibold">Culture Festival </p>
              <p className="text-xs">11 / 20 / 2023 </p>
            </div>
            <div className="h-16 bg-white w-[2px] "></div>
            <p className="w-3/6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="w-2/6 flex items-center gap-x-8 text-2xl justify-end">
            <Link href="/">
              <BsFacebook />
            </Link>
            <Link href="/">
              <AiFillYoutube />
            </Link>
            <Link href="/">
              <AiOutlineInstagram />
            </Link>
            <Link href="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner