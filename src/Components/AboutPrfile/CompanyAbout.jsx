

const CompanyAbout = () => {
    return (
        <div  className="min-h-screen">
        {/* Top banner */}
        <div className="bg-[url('https://i.ibb.co.com/XLJ4zBg/cover3.jpg')] bg-cover bg-center bg-gray-800 text-white py-6 h-56 px-4 md:px-10">
           <h2 className="text-3xl text-blue-700 text-center font-bold">Company history</h2>
           <nav className="mt-2">
               <ol className="list-reset flex justify-center">
                   <li><a href="#" className="text-gray-300">Home</a></li>
                   <li><span className="mx-2">/</span></li>
                   <li className="text-white">About</li>
               </ol>
           </nav>
       </div>
   </div>
    );
};

export default CompanyAbout;