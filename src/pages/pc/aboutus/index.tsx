import '@/global.less';
import nbp from '@/services/nbp';
import { useEffect, useState } from 'react';
import { IGetInitialProps, useRequest } from 'umi';
import PCFooter from '../components/footer';
import PCHeader from '../components/header';
import PCPartnerSwiper from '../components/partnerSwiper';
import PCPositions from '../components/positionList';
import './index.less';

interface PCAboutUsInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    footerLinks?: any[];
    focus?: string;
    partners?: any[];
    positions?: any[];
}

const PCAboutUs = (props: PCAboutUsInitialProps) => {
    const { logos, miniIcon, mpIcon, footerLinks, focus, partners, positions } = props;

    const [newPositions, setNewPositions] = useState<any[] | undefined>(positions);

    const { run: doGetPosition } = useRequest(
        nbp.api.getArticle,
        {
            manual: true,
            onSuccess: (result) => {
                setNewPositions(newPositions?.map(p => {
                    if (p.id === result.id) {
                        return { ...p, htmlContent: result.htmlContent };
                    }
                    return p;
                }));
            }
        });

    const handlePositionChange = async (key: string | string[]) => {
        const changePositions = positions?.filter((i) => (key as string[]).indexOf(i.id) >= 0);
        changePositions?.forEach(async (i) => {
            if (i.htmlContent === undefined) {
                doGetPosition(i.id);
            }
        });
    };

    useEffect(() => {


    }, [newPositions]);

    return (
        <div className="pc-pageContainer">
            <PCHeader top={false} logos={logos} miniIcon={miniIcon} page="aboutus" />
            <div className="focus" style={{ backgroundImage: `url(${focus})` }}>
                <h1>ABOUT US</h1>
                <h3>关于我们</h3>
            </div>
            <div className="mainContent">
                <div id="intro" className="pc-intro">
                    <h2>公司简介</h2>
                    <p>指间礼物是中国领先的场景礼品方案服务商，主要服务商务礼赠、职场福利、社交送礼等场景。指间礼物提供全套礼品方案，支持文字、语音、视频等多种祝福送礼方式。</p>
                    <div className="data">
                        <div><span>2013年度</span><span>金牌服务企业</span></div>
                        <div><span>13项</span><span>送礼解决方案</span></div>
                        <div><span>96%</span><span>以上客户复购率</span></div>
                        <div><span>1357位</span><span>企业客户信赖首选</span></div>
                        <div><span>378</span><span>上市/集团定制送礼方案</span></div>
                    </div>
                </div>
                <div id="culture" className="pc-block">
                    <h2><img src="/assets/CULTURE.png" /><span>企业文化</span></h2>
                    <div className="culture">
                        <div className="item">
                            <img src="/assets/icon-culture-01.png" />
                            <div>
                                <h4>愿景</h4>
                                <span>Vision</span>
                                <p>成为每个人选择礼物的首选平台！</p>
                                <p>Become the preferred platform for everyone to choose gifts!</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/icon-culture-02.png" />
                            <div>
                                <h4>使命</h4>
                                <span>Aission</span>
                                <p>传播中国礼文化，让礼物温暖人间，让生活更多惊喜！</p>
                                <p>Spread Chinese etiquette culture and make gifts warm，Warm the world, let life more surprise!</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/assets/icon-culture-03.png" />
                            <div>
                                <h4>价值观</h4>
                                <span>Sense of Worth</span>
                                <p>感恩、创新、合作、诚信、卓越</p>
                                <p>Gratitude, innovation, cooperation, integrity，excellent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="business" className="pc-block">
                    <h2><img src="/assets/BUSINESS.png" /><span>公司业务</span></h2>
                    <div className="business">
                        <div className="item" style={{ backgroundImage: 'url(/assets/business-01.png)' }}>
                            <div className="modal">
                                <img src="/assets/icon-business-01.png" />
                                <h4>在线送礼</h4>
                                <div></div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(/assets/business-02.png)' }}>
                            <div className="modal">
                                <img src="/assets/icon-business-02.png" />
                                <h4>礼品采购</h4>
                                <div></div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(/assets/business-03.png)' }}>
                            <div className="modal">
                                <img src="/assets/icon-business-03.png" />
                                <h4>礼品兑换</h4>
                                <div></div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(/assets/business-04.png)' }}>
                            <div className="modal">
                                <img src="/assets/icon-business-04.png" />
                                <h4>礼品定制</h4>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="advantage" className="pc-block">
                    <h2><img src="/assets/ADVANTAGE.png" /><span>我们的优势</span></h2>
                    <div className="advantage">
                        <img src="/assets/advantage-line.png" />
                        <div className="advantage01">
                            <img className="icon" src="/assets/icon-advantage-01.png" />
                            <span>专业化礼品垂直平台</span>
                        </div>
                        <div className="advantage02">
                            <img className="icon" src="/assets/icon-advantage-02.png" />
                            <span>12年礼品供应链资源</span>
                        </div>
                        <div className="advantage03">
                            <img className="icon" src="/assets/icon-advantage-03.png" />
                            <span>专业化礼品服务团队</span>
                        </div>
                        <div className="advantage04">
                            <img className="icon" src="/assets/icon-advantage-04.png" />
                            <span>低于其他主流电商平台的价格</span>
                        </div>
                    </div>
                </div>
                <div id="partner" className="pc-block">
                    <h2><img src="/assets/PARTNER.png" /><span>合作伙伴</span></h2>
                    <div className="partner">
                        <PCPartnerSwiper data={partners} />
                    </div>
                </div>
                <div id="contactus" className="pc-block">
                    <h2><img src="/assets/CONTACTUS.png" /><span>联系我们</span></h2>
                    <div className="contactus">
                        <div className="left">
                            <h3>北京购实惠电子商务有限公司</h3>
                            <p>
                                总&nbsp;部&nbsp;地&nbsp;址&nbsp;：北京市丰台区新华国际中心C座221室<br />
                                客&nbsp;服&nbsp;电&nbsp;话&nbsp;：18501957368<br />
                                供应商合作：zhijianliwu@bjlipince.com<br />
                                微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：zhijiangift
                            </p>
                        </div>
                        <div className="right">
                            <form>
                                <div className="formControl">
                                    <input type="text" name="name" placeholder="姓名" />
                                    <input type="text" name="email" placeholder="邮箱" />
                                </div>
                                <div className="formControl">
                                    <input type="text" name="phone" placeholder="电话" />
                                    <input type="text" name="company" placeholder="公司" />
                                </div>
                                <div className="formControl">
                                    <textarea name="remark" placeholder="留言"></textarea>
                                </div>
                                <div className="formControl">
                                    <button>提交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="joinus" className="pc-block">
                    <h2><img src="/assets/JOINUS.png" /><span>加入我们</span></h2>
                    <div className="joinus">
                        <p>我司正在热招的岗位具体职责与要求，有意者请详阅并发简历、相应的作品及个人阐述至：hanzibiao@bjlipince.com，邮件标题请注明“应聘职位”。</p>
                        <div className="positions">
                            <PCPositions
                                data={newPositions}
                                onChange={handlePositionChange} />
                        </div>
                    </div>
                </div>
            </div>
            <PCFooter mpIcon={mpIcon} miniIcon={miniIcon} links={footerLinks} />
        </div>
    );
};

PCAboutUs.getInitialProps = (async () => {
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const footerLinks = (await nbp.api.getAdverts({ code: 'FOOTER-LINKS', provider: 'P', single: false })).items;
    const focus = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'ABOUTUS-FOCUS', provider: 'P', single: true })).space.source);
    const partners = ((await nbp.api.getAdverts({ code: 'LINKS', provider: 'P', single: false })).items.map(i => { return { id: i.id, path: i.path, source: i.source } }));
    const positions = ((await nbp.api.getArticles({ category: '12', maxResultCount: 100 })).items?.map((i) => {
        return { id: i.id, title: i.title }
    }));
    return Promise.resolve({ logos, miniIcon, mpIcon, footerLinks, focus, partners, positions });
}) as IGetInitialProps;

export default PCAboutUs;