import nbp from '@/services/nbp';
import React from 'react';
import SwiperCore, { Lazy, Navigation, Pagination } from 'swiper';
import 'swiper/components/lazy/lazy.less';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/thumbs/thumbs.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';

SwiperCore.use([Lazy, Pagination, Navigation]);

interface ProductPicSwiperProps {
    pics: string[];
}

const ProductPicSwiper = (props: ProductPicSwiperProps) => {
    const { pics } = props;
    return (
        <main>
            <Swiper
                className="wap-swiper-main"
                lazy
                pagination
                navigation
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