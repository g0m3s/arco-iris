import 'swiper/css'
import 'swiper/css/pagination'
import { Stack } from '@mui/material'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface AdditionalPhotosProps {
  photos: string[]
}

export const AdditionalPhotos: React.FC<AdditionalPhotosProps> = ({ photos }) => {
  return (
    <Swiper
      autoHeight
      grabCursor
      navigation
      slidesPerView={1.1}
      spaceBetween={20}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      style={{ width: '100%', zIndex: 11, marginTop: 20 }}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={photo}>
          <Stack width='100%' sx={{ overflow: 'auto' }}>
            <img
              src={photo}
              width='100%'
              height='100%'
              alt='foto adicional do item'
              style={{ borderRadius: '16px' }}
            />
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
