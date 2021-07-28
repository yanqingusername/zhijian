import nbp from '@/services/nbp';
import { useEffect } from 'react';
import './index.less';

interface ShopHeaderProps {
    logos?: string[];
    miniIcon?: string;
    categories?: any[];
    current?: string;
}

const ShopHeader = (props: ShopHeaderProps) => {
    const { logos, miniIcon, categories, current } = props;

    useEffect(() => {
    }, [logos, miniIcon, categories, current]);

    const handleChange = (category: any) => {
        window.location.href = `/product/list/${category}/1`;
    }

    return (
        <header className="shopheader">
            <div className="container">
                <div className="left">
                    <a href="/" className="logo"><img src={logos?.[0]} /></a>
                    <nav className="navs">
                        {
                            categories?.map((i: any) => {
                                if (current === i.code) {
                                    return (
                                        <div className="itemActive" key={i.id}>
                                            <img src={nbp.request.mediaUrl(i.icons?.[1])} />
                                            <span>{i.name}</span>
                                            <span className="underline"></span>
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div className="item" key={i.id} onClick={() => handleChange(i.code)}>
                                            <img src={nbp.request.mediaUrl(i.icons?.[0])} />
                                            <span>{i.name}</span>
                                        </div>
                                    );
                                }
                            })
                        }
                    </nav>
                </div>
                <div className="right">
                    <div className="button">
                        <img src="/assets/icon-xcx-01.svg" />
                        <span>小程序</span>
                    </div>
                    <div className="drop">
                        <img src={miniIcon} />
                        <span>微信扫一扫体验</span>
                    </div>
                </div>
            </div>
        </header>
    );;
}

export default ShopHeader;