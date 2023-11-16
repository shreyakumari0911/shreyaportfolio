import { useState } from "react";
import { Menu } from "../../svg/menu";

export function Nav(){
    const [toggle, setToggle] = useState(false);
    function toggleMenu(){
        setToggle(!toggle);
    }
    return(
        <div className='flex item-end'>
        <div className='flex-1 w-1/2 font-bold my-8 ms-8 text-[#fcd34d] italic text-3xl '>
      <p>Shreya</p>
      </div>
      <div className='flex-2'>
      <div className="lg:hidden cursor-pointer mt-4 lg:mt-8 me-8" onClick={toggleMenu}>
      <Menu/>
    </div>
    <div>
          <ul style={{listStyle:"none"}} className={`lg:flex flex-col lg:flex-row mt-8 me-8 lg:space-x-10 lg:items-center font-mono font-bold text-[#fcd34d] text-lg lg:text-2xl ${toggle ? 'block' : 'hidden'}`}>
          <li><a href="#">Home</a></li>
          <li ><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a  href="#skill">Skills</a></li>
          </ul>
      </div>
      </div>
     
      </div>

       
    );
}
