import '@/global.less';
import nbp from '@/services/nbp';
import React, { useEffect, useState } from 'react';
import { IGetInitialProps, useRequest } from 'umi';
import WAPFooter from '../../components/footer';
import WAPHeader from '../../components/header';
import './[id].less';
import { floor } from '@/utils/util';

interface WAPStrategyDetailInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    strategy?: any;
}

const WAPStrategyDetail = (props: WAPStrategyDetailInitialProps) => {
    const { logos, miniIcon, mpIcon, strategy } = props;
    const [newStrategy, setNewStrategy] = useState<any>();
    const [translated, setTranslated] = useState<boolean>(false);

    const { run: doViewStrategy } = useRequest(nbp.api.viewArticle, {
        manual: true,
        onSuccess: (result) => { }
    });

    useEffect(() => {
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
        <div className="wap-pageContainer">
            <WAPHeader
                logos={logos}
                page="strategydetail"
            />
            <div className="mainContent">
                <div className="contentBody">
                    <h1>{strategy?.title}</h1>
                    <div className="info">
                        <span>by&nbsp;{strategy?.source}</span>
                        <span><i></i>&nbsp;{strategy?.views}</span>
                    </div>
                    <div className="htmlContent" dangerouslySetInnerHTML={{ __html: newStrategy?.htmlContent }}></div>
                </div>
            </div>
            <WAPFooter mpIcon={mpIcon} miniIcon={miniIcon} />
        </div>
    );
};

WAPStrategyDetail.getInitialProps = (async (ctx) => {
    const { id } = ctx.match.params;
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const strategy = ((await nbp.api.getArticle(id)));
    return Promise.resolve({ logos, miniIcon, mpIcon, id, strategy });
}) as IGetInitialProps;

export default WAPStrategyDetail;