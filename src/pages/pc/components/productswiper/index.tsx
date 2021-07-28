import nbp from '@/services/nbp';
import React, { useState } from 'react';
import SwiperCore, { Lazy, Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/components/lazy/lazy.less';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/thumbs/thumbs.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';

SwiperCore.use([Lazy, Pagination, Navigation, Thumbs]);

interface ProductPicSwiperProps {
    pics: string[];
}

const ProductPicSwiper = (props: ProductPicSwiperProps) => {
    const { pics } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null | undefined>(null);
    return (
        <main>
            <Swiper
                className="swiper-main"
                lazy
                pagination
                navigation
                thumbs={{
                    swiper: thumbsSwiper,
                    thumbsContainerClass: 'swiper-thumbs'
                }}
            >
                {
                    pics?.map((v: any, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={nbp.request.mediaUrl(v)} />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={5}
                watchSlidesVisibility
                watchSlidesProgress

            >
                {
                    pics?.map((v: any, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={nbp.request.mediaUrl(v)} />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </main >
    );
};

export default ProductPicSwiper;