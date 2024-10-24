// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";


const Banner = () => {
  return (
    <div className="w-full border border-black">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay feature added
      >
        <SwiperSlide>
        <div className="relative">
       
  <img
    className="w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] object-cover mx-auto rounded"
    src="https://i.ibb.co.com/rFsnGz4/cover1.jpg"
    alt="Cover 1"
  />
<div className="absolute  -top-16 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 mb-8 rounded">
  {/* <Header></Header> */}
  <p className="text-2xl sm:text-3xl lg:text-5xl font-extralight text-teal-300 text-center shadow-lg">
    We are Development Company <br />
    <span className="text-teal-300 ">We Provide Qualityful Service in Our Country</span>
  </p>
  <button className="mt-4 px-6 py-2 bg-teal-900 text-white rounded-full hover:bg-yellow-400 transition duration-300">
    Learn More
  </button>
</div>



          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="relative">

  <img
    className="w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] object-cover mx-auto rounded"
    src="https://i.ibb.co.com/9TRgrZy/cover2.jpg"
    alt="Cover 2"
  />
  <div className="absolute  -top-16 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 mb-8 rounded">
  {/* <Header></Header> */}
    <p className="text-2xl sm:text-3xl lg:text-5xl font-extralight text-teal-300 text-center shadow-lg">
      We are Development Company <br />
      <span className="text-teal-300 ">We Provide Qualityful Service in Our Country</span>
    </p>
    <button className="mt-4 px-6 py-2 bg-teal-900 text-white rounded-full hover:bg-yellow-400 transition duration-300">
      Learn More
    </button>
  </div>

          </div>
        </SwiperSlide>
       
        <SwiperSlide>
        <div className="relative">
      
  <img
    className="w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] object-cover mx-auto rounded"
     src="https://i.ibb.co.com/XLJ4zBg/cover3.jpg"
    alt="Cover 3"
  />
  <div className="absolute  -top-16 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 mb-8 rounded">
  {/* <Header></Header> */}
    <p className="text-2xl sm:text-3xl lg:text-5xl font-extralight text-teal-300 text-center shadow-lg">
      We are Development Company <br />
      <span className="text-teal-300 ">We Provide Qualityful Service in Our Country</span>
    </p>
    <button className="mt-4 px-6 py-2 bg-teal-900 text-white rounded-full hover:bg-yellow-400 transition duration-300">
      Learn More
    </button>
  </div>

          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="relative">
  <img
    className="w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] object-cover mx-auto rounded"
    src="https://i.ibb.co.com/rFsnGz4/cover1.jpg"
    alt="Cover 4"
  />
  <div className="absolute  -top-16 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 mb-8 rounded">
  {/* <Header></Header> */}
    <p className="text-2xl sm:text-3xl lg:text-5xl  font-extralight text-teal-300 text-center shadow-lg">
      We are Development Company <br />
      <span className="text-teal-300 ">We Provide Qualityful Service in Our Country</span>
    </p>
    <button className="mt-4 px-6 py-2 bg-teal-900 text-white rounded-full hover:bg-yellow-400 transition duration-300">
      Learn More
    </button>
  </div>

          </div>
        </SwiperSlide>
        {/* You can add more slides as needed */}
      </Swiper>
      <Marquee className="text-5xl font-serif text-red border my-4 text-teal-600" pauseOnHover={true}>
                    Youngone Corporation is a leading global manufacturer of outdoor/athletic clothing, textiles, footwear, and gear built with a history of innovation, partnership, and trust.
                </Marquee>
    </div>
  );
};

export default Banner;
