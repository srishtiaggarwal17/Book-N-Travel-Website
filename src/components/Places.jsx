import React from "react"
import PlacesCard from "./PlacesCard"
import Img1 from "../assets/place1.png";
import Img2 from "../assets/place2.png";
import Img3 from "../assets/place3.png";
import Img4 from "../assets/place4.png";
import Img5 from "../assets/place5.png";
import Img6 from "../assets/place6.png";

const PlacesData=[
    {
    img: Img1,
    title: "Sunset Cruise",
    location: "Santorini, Greece",
    description: "Enjoy breathtaking sunsets on a peaceful boat cruise along the Aegean Sea.",
    price: 250,
    type: "Romantic Relaxation",
  },
  {
    img: Img2,
    title: "Rainforest Hike",
    location: "Amazon, Brazil",
    description: "Explore the lush Amazon rainforest with expert guides and native tribes.",
    price: 180,
    type: "Adventure Nature",
  },
  {
    img: Img3,
    title: "Historic City Tour",
    location: "Rome, Italy",
    description: "Walk through ancient ruins and discover the rich history of the Roman Empire.",
    price: 120,
    type: "Cultural Exploration",
  },
  {
    img: Img4,
    title: "Desert Safari",
    location: "Dubai, UAE",
    description: "Thrilling desert ride with sandboarding, camel rides, and traditional cuisine.",
    price: 220,
    type: "Adventure Thrill",
  },
  {
    img: Img5,
    title: "Northern Lights Escape",
    location: "Reykjavík, Iceland",
    description: "Witness the magical auroras while staying in cozy glass igloos.",
    price: 300,
    type: "Nature Relaxation",
  },
    {
        img: Img6,
        title:"Taj Mahal",
        location:"India",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Culteral Relax"
    },

]

const Places=({handleOrderPopup})=>{
    return(
        <div className="bg-gray-50 py-10">
            <div className="container">
                <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Best Places to Visit</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        PlacesData.map((item,index)=>(
                            <PlacesCard handleOrderPopup={handleOrderPopup} key={index} {...item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Places













