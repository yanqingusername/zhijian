import nbp from '@/services/nbp';
import React, { useEffect } from 'react';
import SwiperCore, { Autoplay, Lazy, Pagination } from 'swiper';
import 'swiper/components/lazy/lazy.less';
import 'swiper/components/pagination/pagination.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';

SwiperCore.use([Lazy, Pagination, Autoplay]);

interface FocusSwiperProps {
    data?: any[];
}

const FocusSwiper = (props: FocusSwiperProps) => {
    const { data } = props;

    useEffect(() => {
    }, [data]);
    return (
        <Swiper
            className="wap-focus"
            autoplay
            lazy
            pagination
        >
            {
                data?.map(i => {
                    return (
                        <SwiperSlide key={i.id} className="item">
                            {
                                i.path
                                    ?
                                    <a href={i.path}>
                                        <img src={nbp.request.mediaUrl(i.source)} />
                                    </a>
                                    :
                                    <img src={nbp.request.mediaUrl(i.source)} />
                            }
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default FocusSwiper;