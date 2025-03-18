'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

interface SwiperProps {
    images: string[];
}

export default function SwiperComponent({ images }: SwiperProps) {
    

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
            {images.map((images, index) => ( 
                <SwiperSlide key={index}>
                    <Image src={images} alt="Image" 
                    width={600} 
                    height={500} 
                    className="max-h-[480px]" 
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