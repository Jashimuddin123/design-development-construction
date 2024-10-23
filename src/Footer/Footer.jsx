import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#042d5b] text-white py-10 w-full">
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Architeck</h2>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="space-x-4 ml-4  my-4 flex items-center  w-52 gap-2">
          <a href="#" className=""><FaFacebook className="text-2xl "/></a>
          <a href="#" className="text-gray-400"><FaGithub className="text-2xl"/></a>
          <a href="#" className="text-gray-400"><FaInstagram className="text-2xl text-red-800"/></a>
        </div>
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
            <li className="mb-2"><a href="#">Visualizing Architecture</a></li>
            <li className="mb-2"><a href="#">Daily Dose of Architecture</a></li>
            <li className="mb-2"><a href="#">Architizer Architecture</a></li>
            <li className="mb-2"><a href="#">Daily Dose of Architecture</a></li>
            <li><a href="#">Visualizing Architecture</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Contact</h3>
          <p className="text-gray-300 mb-4">
            Near Gutaale Hospital, New Mogadishu Daynile, Mogadishu. Near Mogadishu Main Road, Opposite To Ceelshati
          </p>
          <p className="text-orange-400 mb-2">
            <i className="fas fa-phone-alt"></i> +8801820339433
          </p>
          <p className="text-orange-400">
            <i className="fas fa-envelope"></i> adnanmahmud3394@gmail.com
          </p>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="w-full px-4 mt-10 text-center flex justify-center items-center border-t border-gray-600 pt-6">
        <div className="text-gray-400 text-center mx-auto">
          &copy; 2022 architeck All Rights Reserved.
        </div>
        <div className="space-x-4 ml-4  flex items-center  w-52 gap-2">
          <a href="#" className=""><FaFacebook className="text-2xl"/></a>
          <a href="#" className="text-gray-400"><FaGithub className="text-2xl"/></a>
          <a href="#" className="text-gray-400"><FaInstagram className="text-2xl text-red-800"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
