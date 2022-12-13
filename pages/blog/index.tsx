import { AiOutlineClockCircle } from "react-icons/ai";
import Nav from "../../components/Nav";
const index = () => {
  return (
    <div>
      <Nav />
      <div className="p-20 bg-[#fafafa]">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold py-5">Latest from Our Blog</h2>
          <p>
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt
          </p>
        </div>

        <div className="grid grid-cols-3 gap-16">
          <BlogCart
            date="Dec, 02, 2022"
            title=" Rice Plants"
            text=" Lorem ipsum, in graphical and textual context, refers to filler text
          that is placed in a document or a visual presentation. Lorem ipsum is
          derived from the Latin "
            image="/assets/rice1-min.jpg"
          />

          <BlogCart
            date="Janu, 08, 2023"
            title=" Rice Planting "
            text=" Lorem ipsum, in graphical and textual context, refers to filler text
          that is placed in a document or a visual presentation. Lorem ipsum is
          derived from the Latin "
            image="/assets/rice2-min.jpg"
          />
          <BlogCart
            date="Nov, 01, 2022"
            title=" Rice Growing"
            text=" Lorem ipsum, in graphical and textual context, refers to filler text
          that is placed in a document or a visual presentation. Lorem ipsum is
          derived from the Latin "
            image="/assets/rice3-min.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default index;

const BlogCart = (props: {
  date: String;
  title: String;
  text: String;
  image: String;
}) => {
  const { date, title, text, image } = props;
  return (
    <div className="h-[500px] rounded-md overflow-hidden drop-shadow-xl bg-white group">
      <div className="h-[50%] w-full ">
        <img src={`${image}`} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-5 space-y-3 text-left">
        <p className="flex items-center space-x-1 text-sm font-semibold">
          <>
            <AiOutlineClockCircle /> {date}
            <span className="text-gray-700"> {" | " + title}</span>
          </>
        </p>
        <h2 className="text-2xl font-bold">Latest New Pos</h2>
        <p className="text-md text-gray-700">{`${text}`}</p>
        <button className="px-6 py-3 bg-black text-white rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};
