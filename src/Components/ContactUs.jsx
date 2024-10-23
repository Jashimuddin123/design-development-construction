import { FaPhone } from "react-icons/fa";


const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Top banner */}
      <div className="bg-[url('https://i.ibb.co.com/XLJ4zBg/cover3.jpg')] bg-cover bg-center bg-gray-800 text-white py-6 h-56 px-4 md:px-10">
  <h2 className="text-3xl text-orange-700 text-center font-bold">Contact Us</h2>
  <nav className="mt-2">
    <ol className="list-reset flex">
      <li><a href="#" className="text-gray-300">Home</a></li>
      <li><span className="mx-2">/</span></li>
      <li className="text-white">Contact Us</li>
    </ol>
  </nav>
</div>


      {/* Contact form and map section */}
      <div className="px-4 md:px-10">
        {/* Left Section: Contact Details and Form */}
        <div className=" flex flex-col md:flex-row border border-red-700 px-10">
          {/* Get in Touch */}
          <div className="space-y-6 flex-1">
            <h3 className="text-4xl font-semibold text-pink-700">Get In Touch</h3>
            <ul className="space-y-2 text-gray-600">
              <li><i className="fas fa-map-marker-alt"></i>224 no mirpur 14 nO, Dhaka.</li>
              <li><i className="fas fa-phone"></i> (102) 6666 8888</li>
              <li><i className="fas fa-envelope"></i> adnanmahmud3394@gmail.com</li>
              <li><i className="fas fa-clock"></i> Mon - Sat: 9:00 - 18:00</li>
            </ul>

            <div className="">
               
            <h1 className="text-xl font-bold flex items-center gap-2">Mobile NO:<FaPhone className="text-red-600"></FaPhone></h1>
                <p>01820339433</p>
                <p>01820339433</p>
                <p>01820339433</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" flex-1  ">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">Send Us A Quote</h3>
            <form className="">
              <input type="text" placeholder="Your Name*" className="w-full p-3 border border-gray-300 rounded" />
              <input type="tel" placeholder="Your Phone" className="w-full p-3 border border-gray-300 rounded" />
              <input type="email" placeholder="Your Email*" className="w-full p-3 border border-gray-300 rounded" />
              <textarea placeholder="Write your Message*" className="w-full p-3 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section - at the bottom */}
        <div className="mt-12">
          <iframe
            title="Contact Map - Gulshan, Dhaka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.983941080351!2d90.4125183143604!3d23.780573093112564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7959c3ddc89%3A0x4fcb92ed5b6767b!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1631667652495"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border border-gray-300 rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
