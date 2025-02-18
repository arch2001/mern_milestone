import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Hero=()=>{
    return(
        <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full ">
                <div className="max_padd_container relative top-32 xs:top-52">
                    <h1 className="h1 capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
                    <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">Lorem ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        
                    </p>
                    <div className="flex items-center gap-x-1 my-10"> {/* Reduced gap to 1 */}
            <div className="flex items-center gap-x-1 text-black-500 text-lg">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
       </div>
              <div className="flex items-center bold-16 sm:bold-20"> <span>176k</span> 
            <span className="regular-16 sm:regular-20 ml-1">Excellent Reviews</span> {/* Small spacing */} </div>
        </div>
                    <div className="mx-xs:flex-col flex gap-2">
                    <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}>Shop now</NavLink>
                    <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className="text-2xl"/>Offers</NavLink>
                </div>
                </div>
               </section>
        
    )
}
export default Hero;