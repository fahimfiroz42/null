
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';


import { Autoplay, EffectFade } from 'swiper/modules';

const  Offer= () => {
return (
      <>
       <div className='w-11/12 mx-auto'> 
       <h1 className="text-2xl font-bold border-l-8 border-primary p-2 ">Offers</h1>
       <div className="text-3xl font-bold my-5"><h1>Grave Your Deals</h1></div>
       
       </div>
            
            <div>
                
        </div>
        <section className="  flex min-h-[600px] justify-center  dark:bg-gray-900 text-white w-full relative  pb-12 "> 
           
            <div className="w-full  px-4 sm:px-6 md:px-8 flex justify-center">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    effect='fade'
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false, 
                      }}
                      modules={[EffectFade, Autoplay]}  
                    className="w-full sliderWidth  rounded-2xl cursor-grabbing"
                >
                    {
                        SliderData.map((slider, index) => (
                            <SwiperSlide
                                key={index}
                                className="w-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        `url(${slider.img})`,
                                }}
                            >
                                <div className="w-full h-fullp-10 md:p-12 lg:p-16 space-y-4 sm:space-y-6 flex items-center">
                                    <div className="w-full md:w-8/12 lg:w-7/12 space-y-4 sm:space-y-5">
                                        
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </section>

        
      </>
    );




}
export default Offer;

const SliderData=[
    {
       
        "img": "https://i.ibb.co.com/C5shNXf/a-vector-illustration-of-a-discount-banner-with-th-u4-FDSVMKRb-Cdz6-QUFsrs-Bg-Ebzjt-OPVQ66gv-Uft-PYV.jpg"
     
    },
    {
        "img": "https://i.ibb.co.com/4sw0szD/a-sports-ecommerce-banner-with-an-illustration-of-ap-Q-em3-WQs-Cdq3-GOJRygwg-qo-Yh-U9c2-RXO0-Ta-Avs.jpg"
        
    },
    {
      
        "img": "https://i.ibb.co.com/j6TtmL3/a-cartoon-illustration-of-a-sports-banner-with-the-x-OYngiz9-TY-dpam-XRuga1g-qo-Yh-U9c2-RXO0-Ta-Avs.jpg"
        
    },
    {
       
        "img": "https://i.ibb.co.com/ZYvq670/a-sports-ecommerce-banner-with-a-discount-highligh-Obnhsnfg-Qo-K9da-RPQy-BKSg-qo-Yh-U9c2-RXO0-Ta-Avs.jpg"
    }
  ]
  