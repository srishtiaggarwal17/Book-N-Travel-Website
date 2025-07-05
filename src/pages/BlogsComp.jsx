import React from "react";
import BlogsCard from "./BlogsCard";
import Img1 from "../assets/place1.png";
import Img2 from "../assets/place2.png";
import Img3 from "../assets/place3.png";
import Img4 from "../assets/place4.png";
import Img5 from "../assets/place5.png";
import Img6 from "../assets/place6.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 Best Places to Visit in India",
    description:
      "Discover India's vibrant cities, serene landscapes, and cultural wonders. From the Taj Mahal to Kerala's backwaters, explore unforgettable destinations.",
    author: "John Doe",
    date: "April, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Exploring the Hidden Gems of Europe",
    description:
      "Skip the tourist traps! This guide uncovers Europe's best-kept secrets—from Slovenia's lakes to Portugal's coastal villages.",
    author: "Samantha Lee",
    date: "June, 2023",
  },
  {
    id: 3,
    image: Img3,
    title: "Top 5 Solo Travel Destinations for 2024",
    description:
      "Traveling alone? Discover the safest, most enriching solo travel destinations and tips to make the most of your journey.",
    author: "Michael Chen",
    date: "January, 2024",
  },
  {
    id: 4,
    image: Img4,
    title: "How to Travel on a Budget: A Complete Guide",
    description:
      "Want to travel without breaking the bank? Learn how to find cheap flights, budget stays, and free attractions worldwide.",
    author: "Aditi Sharma",
    date: "September, 2022",
  },
  {
    id: 5,
    image: Img5,
    title: "Cultural Etiquette Around the World",
    description:
      "From bowing in Japan to tipping in the U.S., explore unique customs and etiquette rules every traveler should know.",
    author: "Carlos Rivera",
    date: "November, 2023",
  },
  {
    id: 6,
    image: Img6,
    title: "Adventure Travel: Best Hiking Trails Globally",
    description:
      "Ready for adrenaline? These breathtaking trails—from Peru’s Inca Trail to New Zealand’s Routeburn—are a hiker's dream.",
    author: "Emily Wong",
    date: "March, 2024",
  },
];

const BlogsComp=()=>{
    return(
        <div>
            <div data-aos="fade-up" className="container">
                <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Our Latest Blogs</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {
                        BlogsData.map((item,index)=>(
                            <BlogsCard key={index} {...item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default BlogsComp