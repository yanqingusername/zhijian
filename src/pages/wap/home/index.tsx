import '@/global.less';
import WapFooter from '@/pages/wap/components/footer';
import WapHeader from '@/pages/wap/components/header';
import nbp from '@/services/nbp';
import { useEffect } from 'react';
import { IGetInitialProps } from 'umi';
import WapSwiper from '../components/focusSwiper';
import './index.less';

interface WapHomeInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    swipers?: any[];
}

const WapHome = (props: WapHomeInitialProps) => {
    const { logos, miniIcon, mpIcon, swipers } = props;

    useEffect(() => { }, [logos, miniIcon, mpIcon, swipers]);

    return (
        <div className="wap-pageContainer">
            <WapHeader logos={logos} page="home" />
            <WapSwiper data={swipers} />
            <div className="mainContentWap">
                <div className="home-intro">
                    <h1>指间礼物产品介绍</h1>
                    <p>指间礼物是中国领先的场景礼品方案服务商，主要服务商务礼赠、职场福利、社交送礼等场景。指间礼物提供全套礼品方案，支持文字、语音、视频等多种祝福送礼方式。</p>
                    <div className="items">
                        <div className="item">
                            <img src="/assets/intro-01.png" />
                            <span>人群选礼</span>
                        </div>
                        <div className="item">
                            <img src="/assets/intro-02.png" />
                            <span>场景送礼</span>
                        </div>
                        <div className="item">
                            <img src="/assets/intro-03.png" />
                            <span>风格挑礼</span>
                        </div>
                        <div className="item">
                            <img src="/assets/intro-04.png" />
                            <span>类别筛礼</span>
                        </div>
                    </div>
                </div>
                <div className="home-oper">
                    <h1>OPERATION GUIDE</h1>
                    <span>操作指南</span>
                    <span>|</span>
                    <div className="steps">
                        <div className="stepRight">
                            <div className="name">
                                <h2>
                                    <span>01</span>
                                    <span>挑礼物</span>
                                </h2>
                                <p>礼物商城挑选心仪礼物送给TA(们)</p>
                            </div>
                            <div className="demo">
                                <img className="show" src="/assets/demo-01.png" />
                                <img className="person01" src="/assets/demo-p-01.png" />
                            </div>
                        </div>
                        <div className="stepLeft">
                            <div className="name">
                                <h2>
                                    <span>02</span>
                                    <span>送祝语</span>
                                </h2>
                                <p>文字、语音、视频祝福任意添加，生成礼物红包</p>
                            </div>
                            <div className="demo">
                                <img className="show" src="/assets/demo-02.png" />
                                <img className="person02" src="/assets/demo-p-02.png" />
                            </div>
                        </div>
                        <div className="stepRight">
                            <div className="name">
                                <h2>
                                    <span>03</span>
                                    <span>微信发送</span>
                                </h2>
                                <p>发送给好友或微信群，惊喜一键到达</p>
                            </div>
                            <div className="demo">
                                <img className="show" src="/assets/demo-03.png" />
                                <img className="person03" src="/assets/demo-p-03.png" />
                            </div>
                        </div>
                        <div className="stepLeft">
                            <div className="name">
                                <h2>
                                    <span>04</span>
                                    <span>查收礼物</span>
                                </h2>
                                <p>点开礼物红包查收礼物，填写收货地址，快递到家</p>
                            </div>
                            <div className="demo">
                                <img className="show" src="/assets/demo-04.png" />
                                <img className="person04" src="/assets/demo-p-04.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WapFooter mpIcon={mpIcon} miniIcon={miniIcon} />
        </div>
    )
};

WapHome.getInitialProps = (async () => {
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const swipers = (await nbp.api.getAdverts({ code: 'HOME-FOCUS', provider: 'M', single: false })).items.map((i) => { return { id: i.id, path: i.path, source: i.source } });
    return Promise.resolve({ logos, miniIcon, mpIcon, swipers });
}) as IGetInitialProps;

export default WapHome;