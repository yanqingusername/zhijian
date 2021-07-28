import { useEffect } from 'react';
import './index.less';

interface FooterProps {
    miniIcon?: string;
    mpIcon?: string;
    links?: string[];
}

const Footer = (props: FooterProps) => {
    const { miniIcon, mpIcon } = props;

    useEffect(() => { }, [miniIcon, mpIcon]);

    return (
        <footer className="wap-footer">
            <div className="top">
                <div className="container">
                    <div className="left">
                        <div className="menu">
                            <h3>关于指间</h3>
                            <a href="/wap/aboutus#intro">公司简介</a>
                            <a href="/wap/aboutus#culture">企业文化</a>
                            <a href="/wap/aboutus#business">公司业务</a>
                            <a href="/wap/aboutus#partner">合作伙伴</a>
                        </div>
                        <div className="menu">
                            <h3>指间商城</h3>
                            <a href="/wap/product/list/11/1">自选卡册</a>
                            <a href="/wap/product/list/12/1">储值卡</a>
                            <a href="/wap/product/list/13/1">节日礼品</a>
                            <a href="/wap/product/list/14/1">企业采购</a>
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
                            <a href="/wap/aboutus#contactus">供应商合作</a>
                            <a href="/wap/aboutus#joinus">人才招聘</a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="item">
                            <img src={mpIcon} />
                            <span>指间礼物公众号</span>
                        </div>
                        <div className="item">
                            <img src={miniIcon} />
                            <span>指间礼物小程序</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <span>Copyright©2020 zhijianliwu.com 指间礼物. 版权所有</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;