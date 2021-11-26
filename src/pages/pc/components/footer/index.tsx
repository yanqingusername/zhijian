import { useEffect } from 'react';
import './index.less';

interface FooterProps {
    miniIcon?: string;
    mpIcon?: string;
    links?: any[];
}

const Footer = (props: FooterProps) => {
    const { miniIcon, mpIcon, links } = props;

    useEffect(() => { }, [miniIcon, mpIcon]);
    return (
        <footer className="pc-footer">
            <div className="top">
                <div className="container">
                    <div className="left">
                        <div className="menu">
                            <h3>关于指间</h3>
                            <a href="/pc/aboutus#intro">公司简介</a>
                            <a href="/pc/aboutus#culture">企业文化</a>
                            <a href="/pc/aboutus#business">公司业务</a>
                            <a href="/pc/aboutus#partner">合作伙伴</a>
                        </div>
                        <div className="menu">
                            <h3>指间商城</h3>
                            <a href="/pc/product/list/11/1">自选卡册</a>
                            <a href="/pc/product/list/12/1">储值卡</a>
                            <a href="/pc/product/list/13/1">节日礼品</a>
                            <a href="/pc/product/list/14/1">企业采购</a>
                        </div>
                        <div className="menu">
                            <h3>指间服务</h3>
                            <a href="#">在线送礼</a>
                            <a href="#">礼品采购</a>
                            <a href="#">礼品兑换</a>
                            <a href="#">礼品定制</a>
                        </div>
                        <div className="menu">
                            <h3>联系我们</h3>
                            <a href="#">公司采购</a>
                            <a href="/pc/aboutus#contactus">供应商合作</a>
                            <a href="/pc/aboutus#joinus">人才招聘</a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="item">
                            <img src={mpIcon} />
                            <span>指间礼物公众号</span>
                        </div>
                        <div className="items">
                            <img src={miniIcon} />
                            <span>指间礼物小程序</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="links">
                        <span>友情链接：</span>
                        {
                            links?.map((v: any, i: number) => {
                                if (i === links.length - 1) {
                                    return (
                                        <a href={v.path}>{v.title}</a>
                                    )
                                }
                                else {
                                    <>
                                        <a href={v.path}>{v.title}</a>
                                        <span>|</span>
                                    </>
                                }
                            })
                        }
                    </div>
                    <span>ICP备案证书号：</span><a href='https://beian.miit.gov.cn/#/Integrated/index' target="_blank">京ICP备15002753号-9</a><span>|</span>
                    <span>Copyright©2020 zhijianliwu.com 指间礼物. 版权所有</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;