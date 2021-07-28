import '@/global.less';
import nbp from '@/services/nbp';
import React, { useEffect, useState } from 'react';
import { IGetInitialProps, useRequest } from 'umi';
import PCFooter from '../../components/footer';
import PCHeader from '../../components/header';
import PCBreadcrumb from '../../components/breadcrumb';
import './[id].less';
import { floor } from '@/utils/util';

interface PCStrategyDetailInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    footerLinks?: any[];
    strategy?: any;
}

const PCStrategyDetail = (props: PCStrategyDetailInitialProps) => {
    const { logos, miniIcon, mpIcon, footerLinks, strategy } = props;
    const [breadcrumb, setBreadcrumb] = useState<any[]>([]);
    const [newStrategy, setNewStrategy] = useState<any>();
    const [translated, setTranslated] = useState<boolean>(false);

    const { run: doViewStrategy } = useRequest(nbp.api.viewArticle, {
        manual: true,
    });

    useEffect(() => {
        setBreadcrumb([
            { key: '礼物攻略', value: '/strategy/list', first: true },
            { key: '攻略详情', current: true }
        ]);
    }, []);

    useEffect(() => {
        if (strategy) {
            doViewStrategy(strategy.id);
            setNewStrategy(strategy);
        }
    }, [logos, miniIcon, mpIcon, strategy]);

    useEffect(() => {
        if (strategy) {
            if (!translated) {
                nbp.util.matchArticleProduct(strategy.htmlContent).forEach((match) => {
                    nbp.api.getProduct(match[1]).then((product) => {
                        if (product) {
                            let newHtml = strategy.htmlContent.replace(match[0], `<div class="strategy-product"><a href="/product/detail/${match[1]}"><img src="${nbp.request.mediaUrl(product.pic)}" /><p><span >${product.name}</span><span>￥${floor(product.price, 2)}</span></p></a><img src="${nbp.request.mediaUrl(product.appendixes?.[0])}"/></div>`);
                            setNewStrategy({ ...strategy, htmlContent: newHtml });
                        }
                    });
                });
                setTranslated(true);
            }
        }
    }, [newStrategy, translated]);

    return (
        <div className="pc-pageContainer">
            <PCHeader
                top={false}
                logos={logos}
                miniIcon={miniIcon}
                page="strategy"
            />
            <div className="mainContent top-to-head">
                <div className="breadcrumb">
                    <PCBreadcrumb data={breadcrumb} />
                </div>
                <div className="contentBody">
                    <h1>{strategy?.title}</h1>
                    <div className="info">
                        <span>by&nbsp;{strategy?.source}</span>
                        <span><i></i>&nbsp;{strategy?.views}</span>
                    </div>
                    <div className="htmlContent" dangerouslySetInnerHTML={{ __html: newStrategy?.htmlContent }}></div>
                </div>
            </div>
            <PCFooter mpIcon={mpIcon} miniIcon={miniIcon} links={footerLinks} />
        </div>
    );
};

PCStrategyDetail.getInitialProps = (async (ctx) => {
    const { id } = ctx.match.params;
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const footerLinks = (await nbp.api.getAdverts({ code: 'FOOTER-LINKS', provider: 'P', single: false })).items;
    const strategy = ((await nbp.api.getArticle(id)));
    return Promise.resolve({ logos, miniIcon, mpIcon, footerLinks, id, strategy });
}) as IGetInitialProps;

export default PCStrategyDetail;