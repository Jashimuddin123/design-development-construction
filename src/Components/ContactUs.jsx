import { FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div id="contact" className="min-h-screen bg-gray-100">
      {/* Top banner */}
      <div className="bg-[url('https://i.ibb.co/XLJ4zBg/cover3.jpg')] bg-cover bg-center text-white py-10 px-4 md:px-10 h-56 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl text-orange-600 font-bold">Contact Us</h2>
        <nav className="mt-2">
          <ol className="list-reset flex gap-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">Contact Us</li>
          </ol>
        </nav>
      </div>

      {/* Contact form and map section */}
      <div className="container mx-auto p-4 md:p-10 space-y-10">
        {/* Contact Details and Form */}
        <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg p-6 md:p-10 rounded-lg">
          {/* Contact Details */}
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl md:text-4xl font-semibold text-pink-700">Get In Touch</h3>
            {/* Dhaka Office Section */}
            <div className="space-y-4 text-lg">
              <h4 className="text-xl md:text-2xl font-semibold text-pink-600">Dhaka Office</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-red-500"></i>
                  201 No Road Mirpur, Shymoli,Adabor, Dhaka
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope text-red-500"></i>
                  <p>acondd.bd@gmail.com</p>
                </li>
                <li>Abdulla Al Jubair</li>
              </ul>
              <div className="flex items-center gap-2 text-gray-700">
                <h1 className="text-lg font-bold flex items-center gap-2">
                <FaPhone className="text-red-600" /> :
                </h1>
                <p>01918378842</p>
              </div>
            </div>

            {/* Pabna Branch Section */}
            <div className="space-y-4 text-lg">
              <h4 className="text-xl md:text-2xl font-semibold text-pink-600">Pabna Branch</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-red-500"></i>
                  Shopnonir, Shalgaria Food Godown, Pabna Sadar, Pabna
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope text-red-500">  </i>
                  <p>acondd.bd@gmail.com</p>
                </li>
                <li>Mostafizur Rahma</li>
              </ul>
              <div className="flex items-center gap-2 text-gray-700">
                <h1 className="text-lg font-bold flex items-center gap-2">
                   <FaPhone className="text-red-600" /> :
                </h1>
                <p>01737768108</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">Send Us A Quote</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <textarea
                placeholder="Write your Message*"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded w-full md:w-auto transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
          <iframe
            title="Contact Map - Pabna, Bangladesh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3583914854285!2d89.22178641529418!3d24.006962484280885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf0f5b5d9137b%3A0x1e3587ef967fc87f!2sPabna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1631667652495"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-none rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
