// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Gallery = () => {
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <div className="my-10">
                <h1 className="text-3xl  font-bold text-center "> Our Gallery </h1>
                <hr className="w-1/12 mx-auto border-2 border-primary" />

            </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, 
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }} 
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >


       

        {
            product.map((item)=>{

              return(
                <div key={item}>
                  <SwiperSlide className='cursor-grabbing'>
                    <div className=' h-96  md:w-78 md:h-96  lg:w-96 lg:h-96 relative  '>
                    <img src={item.img} alt="" className='object-cover w-full h-full rounded-xl '  />
                  
                    
                    </div>
                    
                    




                    
                  </SwiperSlide>


                </div>
              )



            })
        }
    





      </Swiper>


            
        </div>
    );
};


const product=[
    {
      "id": 1,
     
      "img": " https://i.ibb.co.com/dtxHTKL/download.jpg"
    },
    





    {
      "id": 2,
   
      "img": "https://i.ibb.co.com/BTQm1Fb/Atercel-Workout-Gloves-for-Men-Women-Gym-Weight-Lifting-Gloves-With-Hooks-Black-M-Size-Medium.jpg"
    },
    {
      "id": 3,
   
      "img": "https://i.ibb.co.com/kXgs403/Bracelet-de-Maintien-Poignet-pour-Musculation-Crossfit-Halt-rophilie-sport-Vert-D.jpg"
    },
    {
      "id": 4,
 
      "img": "https://i.ibb.co.com/JnLGgvz/top-view-composition-with-neatly-arranged-organized-sport-items.jpg"
    },
    {
      "id": 5,
      
      "img": "https://i.ibb.co.com/4jx4p7h/New-Sports-Water-Bottle-Grey-1-0-L.jpg"
    },
    {
      "id": 6,
     
      "img": "https://i.ibb.co.com/KVWcjf9/Matte-Sports-Water-Bottle-350ml-bright-green.jpg"
    },
    {
      "id": 7,
      
      "img": "https://i.ibb.co.com/3fctFMp/Immune-support.jpg"
    },
    {
      "id": 8,
      
      "img": "https://i.ibb.co.com/ft8BM1K/ASRV-Gym-Training-Tetra-Lite-Jogger-Kit.jpg"
    },
    {
      "id": 9,
     
      "img": "https://i.ibb.co.com/rwrvTBt/WARPFLEXX-COMPRESSION-TRAINING-RUNNING-LONG-SLEEVE.jpg"
    }
  ]





export default Gallery;