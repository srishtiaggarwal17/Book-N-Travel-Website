// import React from "react";
// import Travel from "../assets/travel-cover.png"
// import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
// import { IoIosWifi } from "react-icons/io";
// import { IoFastFoodSharp } from "react-icons/io5";

// const Banner=()=>{
//     return(
//         <div className="min-h-[550px] bg-gray-100">
//             <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
//                 <div className="container">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
//                         <div >
//                             <img data-aos="flip-up" src={Travel} alt=""
//                             className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"></img>
//                         </div>
//                         <div>
//                             <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">Explore all corners of the world with us.</h1>
//                             <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis perspiciatis 
//                                 voluptatibus ipsa reprehenderit, nostrum culpa saepe laboriosam voluptatem ipsum minus in deleniti ex, reiciendis officia earum. Eius, facilis dolorum.{""}
//                             </p>
//                             <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
//                                 <div className="space-y-6">
//                                     <div className="flex items-center gap-4">
//                                         <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 "/>
//                                         <p>Flight</p>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 "/>
//                                         <p>Hotel</p>
//                                     </div>
//                                 </div>
//                                 <div className="space-y-6">
//                                     <div className="flex items-center gap-4">
//                                         <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 "/>
//                                         <p>Wi-Fi</p>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 "/>
//                                         <p>Foods</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Banner





import React from "react";
import Travel from "../assets/travel-cover.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100 ">
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Clean Image - no box */}
            <div>
              <img
                data-aos="flip-up"
                src={Travel}
                alt="travel"
                className="w-full h-[350px] object-contain mx-auto"
              />
            </div>

            {/* Text & Icons */}
            <div>
              <h1
                data-aos="fade-up"
                className="text-3xl font-bold sm:text-4xl"
              >
                Explore all corners of the world with us.
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-8 mt-4"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam debitis perspiciatis voluptatibus ipsa reprehenderit,
                nostrum culpa saepe laboriosam voluptatem ipsum minus in
                deleniti ex, reiciendis officia earum. Eius, facilis dolorum.
              </p>

              {/* Features */}
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6 mt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                    <p>Flight</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100" />
                    <p>Hotel</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100" />
                    <p>Wi-Fi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100" />
                    <p>Foods</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
