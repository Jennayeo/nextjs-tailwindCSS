import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import Image from 'next/image';
import next from "resources/next.png";
import back from "resources/back.png";

// core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation]);
export default function Carousel(props) {
    // const [loading, setLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const swiperRef = useRef(null);    

    const customLoader = ({ src, width, quality }) => {
        return <div>loading</div>
        
        // `https://s3.amazonaws.com/image/${src}?w=${width}&q=${quality}`
      }

    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
            // setLoading(true);
        }
    }

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            // setLoading(true);
            
        }
    };

    const handleImageLoad = (index) => {
        setImageLoaded((prevState) => ({
          ...prevState,
          [index]: true,
        }));
      };
    
    //   const addLoading = (img) => {
    //     // img.loading = true;
    //     console.log(img);
    //   }
    
    return (
        <div className="flex items-center mb-[20px]">
            <Image src={back} onClick={slidePrev} className="w-[30px] h-[30px] cursor-pointer"/>
            {/* <button >Previous</button> */}
            <Swiper ref={swiperRef} autoHeight={true} autoplay={true}>
                {props.imgUrl.map((img, index) => {
                    // console.log(img.file.url);
                    return (
                        // img.file.url?
                        
                        
                        <SwiperSlide key={img.index} className="flex items-center">
                            <div className="flex justify-center" style={{ width: '100%', height: '100%' }}>
                                {/* <img src={img.file.url}/> */}
                                {!imageLoaded[index]&&
                                    <div
                                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] absolute mt-7"
                                    role="status">
                                    <span
                                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Loading...</span
                                    >
                                    </div>
                                
                                }
                                    <Image src={img.file.url} width={500} height={100} onLoadingComplete={() => addLoading(img)} onLoad={() => handleImageLoad(index)}/>
                            </div>
                        </SwiperSlide>
                        // : 
                        // <div>'loading'</div>
                    )

                })}
                {/* <SwiperSlide><Image src={fms1}/></SwiperSlide>
                <SwiperSlide><Image src={fms2}/></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide> */}
            </Swiper>
            <Image src={next} onClick={slideNext} className="w-[30px] h-[30px] cursor-pointer	"/>

            {/* <button >Next</button> */}
        </div>
      );
}