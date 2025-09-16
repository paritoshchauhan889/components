import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="relative container-fluid border-t-2 border-white">
      {/* Navbar Top */}
      <div className="flex justify-between items-center px-6 py-4 bg-[#3a7e8d] text-white border-b-2">
        <div className="text-2xl font-bold">
          <img
            src="https://ibkp.dbtindia.gov.in/images/logo.png"
            className="w-auto h-12 bg-white rounded-md"
            alt=""
          />
        </div>
        <div className="text-2xl font-bold space-x-4">
          <Button className="bg-white text-[#3a7e8d]">Login</Button>
          <Button className="bg-white text-[#3a7e8d]">Register</Button>
        </div>
        
      </div>
      <div className="flex justify-between items-center px-6 py-4 bg-[#3a7e8d] text-white">
        <div className="all-links flex justify-between space-x-6 leading-normal">
  <div className="menu-links text-left"> 
          <Button className="bg-white mb-2 text-[#3a7e8d]">Home



          </Button>
         
        </div>
         <div className="menu-links text-left"> 
          <Button className="bg-white mb-2 text-[#3a7e8d]">IBSC</Button>
        
        </div>
         <div className="menu-links text-left"> 
          <Button className="bg-white mb-2 text-[#3a7e8d]">RCGM </Button>
         
        </div>
         <div className="menu-links text-left"> 
          <Button className="bg-white mb-2 text-[#3a7e8d]">DATABASE</Button>
         
        </div>
</div>
        <div className="flex gap-4 social-media-links">
          <Facebook size={30} className="bg-blue-800 p-1 rounded-md"/>
          <Instagram size={30} className="bg-pink-400 p-1 rounded-md"/>
          <Twitter size={30} className="bg-blue-400 p-1 rounded-md"/>
          <Youtube size={30} className="bg-red-800 p-1 rounded-md"/>
        </div>

        
      </div>
    </header>
  );
};

export default Navbar;
