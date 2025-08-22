'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

const images = [
  '/images/delynn-4.jpg',
  '/images/delynn-2.jpg',
  '/images/delynn-3.jpg',
]

export default function CarouselGallery() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
      speed={800}
      className="w-full h-screen" // kasih tinggi supaya kelihatan
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="w-full h-full relative">
            <Image
              src={src}
              alt={`Delynn ${idx + 1}`}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
