'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SwiperPropsVideo {
    videos: string[];
}

export default function CarouselVideo({ videos }: SwiperPropsVideo) {
    

    return (
        
        <div className="overflow-hidden max-w-[500px] text-white">
        <Swiper
            // Core props
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            
            // Responsive breakpoints
            breakpoints={{
            640: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            }
            }}

            // Autoplay configuration
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}

            // Additional props
            loop={true}
            centeredSlides={true}
            className="text-white"
        >
            {videos.map((video, index) => ( 
                <SwiperSlide key={index}>
                    <video 
                        src={video} 
                        width={600} 
                        height={200} 
                        className="max-h-[480px]" 
                        controls 
                        autoPlay 
                        loop 
                        muted 
                    />
    
                </SwiperSlide>
            ))}
            
        </Swiper>

        <style jsx>{`
                :global(.swiper-button-prev), 
                :global(.swiper-button-next) {
                    color: #ffffff87 !important; 
                    
                }

                :global(.swiper-button-prev:hover), 
                :global(.swiper-button-next:hover) {
                    color: #ccc !important; 
                }
                :global(.swiper-pagination-bullet) {
                background-color: white !important;
                opacity: 0.2;
                }
                :global(.swiper-pagination-bullet-active) {
                background-color: white !important;
                opacity: 100;
                }
    
            `}</style>
        </div>
    )
}