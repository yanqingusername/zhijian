import nbp from '@/services/nbp';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Lazy, Navigation } from 'swiper';
import 'swiper/components/lazy/lazy.less';
import 'swiper/components/navigation/navigation.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';

SwiperCore.use([Lazy, Navigation]);

interface PartnerSwiperProps {
    data?: any[];
}

const PartnerSwiper: React.FC<PartnerSwiperProps> = (props) => {
    const { data } = props;
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        let num = 18;
        if (data && data.length > 0) {
            let temp = [];
            let len = Math.floor(data.length % num);
            if (len === 0) {
                len = data.length / num;
            }
            else {
                len = Math.floor(data.length / num) + 1;
            }
            for (let i = 0; i < len; i++) {
                temp[i] = (data.slice(i * num, (i + 1) * num));
            }
            setItems(temp);
        }

    }, [data]);

    return (
        <div className="pc-partner-container">
            <div className='partner-prev'><i></i></div>
            <Swiper
                className="partner-list"
                lazy
                navigation={{
                    nextEl: '.partner-next',
                    prevEl: '.partner-prev'
                }}
            >
                {
                    items?.map((v: any, i: any) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="partner-item">
                                    {v.map((j: any) => {
                                        return (<a target="_blank" title={j.title} href={j.path} key={j.id}><img src={nbp.request.mediaUrl(j.source)} /></a>)
                                    })}
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <div className='partner-next'><i></i></div>
        </div>
    );
};

export default PartnerSwiper;