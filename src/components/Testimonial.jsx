// import React from "react";
// import Slider from "react-slick"

// const TestimonialData = [
//   {
//     id: 1,
//     name: "Smith",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
//     img: "https://picsum.photos/seed/smith/100",
//   },
//   {
//     id: 2,
//     name: "Emily Johnson",
//     text: "Facere accusamus libero dolorum exercitationem, maiores animi nemo quos modi molestiae. Doloremque culpa fugiat voluptas labore.",
//     img: "https://picsum.photos/seed/emily/100",
//   },
//   {
//     id: 3,
//     name: "Michael Brown",
//     text: "Ut officiis temporibus, voluptatibus porro assumenda, reiciendis commodi repellendus laborum quia dolorem rem sapiente sed numquam.",
//     img: "https://picsum.photos/seed/michael/100",
//   },
//   {
//     id: 4,
//     name: "Ava Martinez",
//     text: "Nemo, quia. Cum perferendis veritatis explicabo nesciunt modi, placeat voluptas molestias atque rerum. Beatae repellendus corrupti iusto!",
//     img: "https://picsum.photos/seed/ava/100",
//   },
//   {
//     id: 5,
//     name: "Liam Patel",
//     text: "Iusto, cupiditate! Sit eius eveniet itaque nesciunt incidunt. Necessitatibus at repellendus ea pariatur placeat fuga ex tenetur?",
//     img: "https://picsum.photos/seed/liam/100",
//   },
//   {
//     id: 6,
//     name: "Sophia Lee",
//     text: "Repudiandae sunt distinctio porro! Quos repellat dolore, obcaecati facilis dignissimos quibusdam pariatur laborum suscipit rerum odit.",
//     img: "https://picsum.photos/seed/sophia/100",
//   },
//   {
//     id: 7,
//     name: "James Kim",
//     text: "Accusamus dignissimos natus labore harum unde, iure quidem ab obcaecati architecto, minus quae laudantium cum eveniet.",
//     img: "https://picsum.photos/seed/james/100",
//   },
//   {
//     id: 8,
//     name: "Olivia Nguyen",
//     text: "Temporibus excepturi molestias necessitatibus rem quas. Aliquam unde pariatur officiis! Eveniet, commodi. Architecto officiis nesciunt tenetur.",
//     img: "https://picsum.photos/seed/olivia/100",
//   },
// ];

// const Testimonial = () => {
//   var settings = {
//   dots: true,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   cssEase: "linear",
//   pauseOnHover: true,
//   pauseOnFocus: true,
//   responsive: [
//     {
//       breakpoint: 10000,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 640,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       },
//     },
//   ],
// };    

//   return (
//     <div className="py-10">
//       <div className="container">

//         {/* header section */}
//         <div className="text-center mb-20 max-w-[400px] mx-auto">
//           <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Testimonial
//           </p>
//           <h1 className="text-3xl font-bold">Testimonial</h1>
//           <p className="text-xs text-gray-400">
//             {""}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
//             nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
//             quam! Nulla?
//           </p>
//         </div>

//         {/* testimonial section */}
//         <Slider {...settings}>
//             {
//                 TestimonialData.map(({id,name,text,img})=>{
//                     return(
//                         <div key={id} className="my-6">
//                             <div className="flex flex-col justify-center items-center text-center shadow-lg p-4 mx-4 roounded-xl
//                             bg-primary/10 relative">
//                                 <img src={img} alt=""
//                                 className="rounded-full block mx-auto"/>
//                                 <h1 className="text-xl font-bold">{name}</h1>
//                                 <p className="text-gray-500 text-sm">{text}</p>
//                                 <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/seed/smith/100",
  },
  {
    id: 2,
    name: "Emily Johnson",
    text: "Facere accusamus libero dolorum exercitationem, maiores animi nemo quos modi molestiae. Doloremque culpa fugiat voluptas labore.",
    img: "https://picsum.photos/seed/emily/100",
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "Ut officiis temporibus, voluptatibus porro assumenda, reiciendis commodi repellendus laborum quia dolorem rem sapiente sed numquam.",
    img: "https://picsum.photos/seed/michael/100",
  },
  {
    id: 4,
    name: "Ava Martinez",
    text: "Nemo, quia. Cum perferendis veritatis explicabo nesciunt modi, placeat voluptas molestias atque rerum. Beatae repellendus corrupti iusto!",
    img: "https://picsum.photos/seed/ava/100",
  },
  {
    id: 5,
    name: "Liam Patel",
    text: "Iusto, cupiditate! Sit eius eveniet itaque nesciunt incidunt. Necessitatibus at repellendus ea pariatur placeat fuga ex tenetur?",
    img: "https://picsum.photos/seed/liam/100",
  },
  {
    id: 6,
    name: "Sophia Lee",
    text: "Repudiandae sunt distinctio porro! Quos repellat dolore, obcaecati facilis dignissimos quibusdam pariatur laborum suscipit rerum odit.",
    img: "https://picsum.photos/seed/sophia/100",
  },
  {
    id: 7,
    name: "James Kim",
    text: "Accusamus dignissimos natus labore harum unde, iure quidem ab obcaecati architecto, minus quae laudantium cum eveniet.",
    img: "https://picsum.photos/seed/james/100",
  },
  {
    id: 8,
    name: "Olivia Nguyen",
    text: "Temporibus excepturi molestias necessitatibus rem quas. Aliquam unde pariatur officiis! Eveniet, commodi. Architecto officiis nesciunt tenetur.",
    img: "https://picsum.photos/seed/olivia/100",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">What our travelers say</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="px-4 sm:px-0">
          <Slider {...settings}>
            {TestimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="my-6">
                <div className="flex flex-col justify-center items-center text-center shadow-lg p-6 mx-4 rounded-xl bg-primary/10 relative">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full w-20 h-20 object-cover mx-auto mb-3"
                  />
                  <h1 className="text-xl font-bold mb-1">{name}</h1>
                  <p className="text-gray-500 text-sm">{text}</p>
                  <p className="text-black/20 text-8xl font-serif absolute top-0 right-4 leading-none select-none">“</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
