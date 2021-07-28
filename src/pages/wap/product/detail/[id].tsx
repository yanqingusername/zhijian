import '@/global.less';
import nbp from '@/services/nbp';
import { floor } from '@/utils/util';
import React, { useEffect, useState } from 'react';
import { IGetInitialProps, useRequest } from 'umi';
import WAPFooter from '../../components/footer';
import WAPHeader from '../../components/header';
import PicSwiper from '../../components/productswiper';
import SkuPanel from '../../components/productskupanel';
import './[id].less';

interface WAPProductDetailInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    product?: any;
}

const WAPProductDetail = (props: WAPProductDetailInitialProps) => {
    const { logos, miniIcon, mpIcon, product } = props;
    const [sku, setSku] = useState<any>();
    const [productTabActive, setProductTabActive] = useState<string>('introduce');

    const { run: doViewProduct } = useRequest(nbp.api.viewProduct, {
        manual: true
    });

    const handleSkuChange = (sku: string | undefined) => {
        if (sku) {
            const tmp = product?.skus.filter((s: any) => s.name === sku);
            if (tmp.length > 0) {
                setSku(tmp[0]);
            }
        }
    };

    const handleTabChange = (tab: string) => {
        setProductTabActive(tab);
    };

    useEffect(() => {
        if (product) {
            doViewProduct(product.id);
        }
    }, [logos, miniIcon, mpIcon, product]);

    return (
        <div className="wap-pageContainer">
            <WAPHeader logos={logos} page="product" back={true} />
            <div className="mainContent">
                <div className="productinfo">
                    <div className="container">
                        <div className="left">
                            <PicSwiper
                                pics={product?.pics}
                            />
                        </div>
                        <div className="right">
                            <h1>{product?.name}</h1>
                            <div className="price">
                                <span>{`￥${floor(product?.price, 2)}`}</span>
                                <img src="/assets/icon-enterprise.png" />
                                <span>{`￥${floor(product?.marketPrice, 2)}`}</span>
                            </div>
                            <div className="skuContent">
                                <SkuPanel
                                    attr={product?.skuAttrs}
                                    sku={sku?.name}
                                    onChange={handleSkuChange}
                                />
                            </div>
                            <div className="qrcontent">
                                <img src={nbp.request.mediaUrl(product?.appendixes[0])} />
                                <span>小程序扫码下单</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productbody">
                    <div className="tabContent">
                        <div className="product-tabs">
                            {
                                productTabActive === 'introduce'
                                    ? <a className="active">商品介绍</a>
                                    : <a href="#introduce" onClick={() => handleTabChange('introduce')}>商品介绍</a>
                            }
                            {
                                productTabActive === 'packing'
                                    ? <a className="active">规格包装</a>
                                    : <a href="#packing" onClick={() => handleTabChange('packing')}>规格包装</a>
                            }
                            {
                                productTabActive === 'service'
                                    ? <a className="active">售后保障</a>
                                    : <a href="#service" onClick={() => handleTabChange('service')}>售后保障</a>
                            }
                        </div >
                    </div >
                    {
                        productTabActive === 'introduce'
                            ? <div id="introduce" className="introduce" dangerouslySetInnerHTML={{ __html: product?.htmlContent }}></div>
                            : null
                    }
                    {
                        productTabActive === 'packing'
                            ? <div id="packing" className="packing" dangerouslySetInnerHTML={{ __html: product?.packageContent }}></div>
                            : null
                    }
                    {
                        productTabActive === 'service'
                            ? <div id="service" className="service" dangerouslySetInnerHTML={{ __html: product?.serviceContent }}></div>
                            : null
                    }

                </div>
            </div >
            <WAPFooter mpIcon={mpIcon} miniIcon={miniIcon} />
        </div >
    );
};

WAPProductDetail.getInitialProps = (async (ctx) => {
    const { id } = ctx.match.params;
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const product = ((await nbp.api.getProduct(id)));
    return Promise.resolve({ logos, miniIcon, mpIcon, product });
}) as IGetInitialProps;

export default WAPProductDetail;