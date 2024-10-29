import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-10 w-full">
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-4xl text-red-800 font-bold mb-4">Acon</h2>
          <p>Design & Development Firm</p>
       
        </div>
        
        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful links</h3>
          <ul className="text-gray-300">
            <li className="mb-2"><a href="#">Our Process</a></li>
            <li className="mb-2"><a href="#">Our Team</a></li>
            <li className="mb-2"><a href="#">Contact Us</a></li>
            <li className="mb-2"><a href="#">Our Clients</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="text-gray-300">
            <li className="mb-2"><a href="#">Sub soil investigation </a></li>
            <li className="mb-2"><a href="#">Survey </a></li>
            <li className="mb-2"><a href="#">Architectural Design</a></li>
            <li className="mb-2"><a href="#">Structural Design</a></li>
            <li className="mb-2"><a href="#">Construction</a></li>
          
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Contact</h3>
          <p className="text-gray-300 mb-4">
            Near Dhaka 201, Mirpur Road, Shymoli,Adabor, Dhaka
          </p>
          <p className="mb-2">
            <i className="fas fa-phone-alt"></i>
            <p>01918378842</p>
          </p>
          <p className="">
            <i className="fas fa-envelope"></i>acondd.bd@gmail.com
          </p>
          <div className="space-x-4 ml-4  flex mt-6 items-center  w-52 gap-2">
          <a href="#" className=""><FaFacebook className="text-2xl"/></a>
          <a href="#" className="text-gray-400"><FaGithub className="text-2xl"/></a>
          <a href="#" className="text-gray-400"><FaInstagram className="text-2xl text-red-800"/></a>
        </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="w-full px-4 mt-10 text-center flex justify-center items-center border-t border-gray-600 pt-6">
        <div className="text-gray-400 text-center mx-auto">
          &copy; 2024 Acon All Rights Reserved.
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
