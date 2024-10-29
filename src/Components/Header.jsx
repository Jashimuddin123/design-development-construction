import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <h1 className="text-3xl text-center text-white font-bold">Design Developemnt Service Team</h1>
            <p className="text-xl text-white text-center font-semibold">
                {moment().format("MMMM Do YYYY, h:mm:ss a")}
            </p>

            <div className="flex gap-2 items-center max-w-xl mx-auto mt-4 text-white">
                <button className="px-5 py-2 bg-[#D72050] text-white rounded">
                    UPDATE
                </button>
             
            </div>
        </div>
    );
};

export default Header;
