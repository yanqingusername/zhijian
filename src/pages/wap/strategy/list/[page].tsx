import '@/global.less';
import nbp from '@/services/nbp';
import { useEffect, useState } from 'react';
import { IGetInitialProps, useRequest } from 'umi';
import WAPFooter from '../../components/footer';
import WAPHeader from '../../components/header';
import './[page].less';

const category = '11';
const maxCount = 20;

interface WAPStrategyListInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    page?: number;
    strategies?: any[];
}

const WAPStrategyList = (props: WAPStrategyListInitialProps) => {
    const { logos, miniIcon, mpIcon, page, strategies } = props;
    const [newStrategies, setNewStrategies] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const { run: doGetStrategies } = useRequest(nbp.api.getArticles, {
        manual: true,
        onSuccess: (result) => {
            if (result.items!.length > 0) {
                setNewStrategies(newStrategies?.concat(result.items));
                if (result.items!.length === maxCount) {
                    setCurrentPage(currentPage + 1);
                }
                else {
                    setHasMore(false);
                }
            }
            else {
                setHasMore(false);
            }
        }
    });

    const getMore = async () => {
        if (hasMore) {
            doGetStrategies({ category, maxResultCount: maxCount, skipCount: (maxCount * (currentPage - 1)) });
        }
    };

    useEffect(() => {
        if (strategies && page) {
            if (strategies.length === maxCount) {
                setHasMore(true);
            }
            setCurrentPage(page);
            setNewStrategies(strategies);
        }
    }, [logos, miniIcon, mpIcon, page, strategies]);

    useEffect(() => {
    }, [newStrategies, hasMore]);

    return (
        <div className="wap-pageContainer">
            <WAPHeader
                logos={logos}
                page="strategy"
            />
            <div className="mainContent">
                <h1 className="strategy-title">最新、最热好礼推荐，小编带你种草</h1>
                <div className="strategy-list">
                    {
                        newStrategies?.map((v) => {
                            return (
                                <a key={v.id} className="item" href={`/strategy/detail/${v.id}`}>
                                    <img src={nbp.request.mediaUrl(v.pic)} />
                                    <p>{v.title}</p>
                                </a>
                            );
                        })
                    }
                </div>
                {
                    hasMore ? <a className="moreBtn" onClick={getMore}>更多</a> : null
                }
            </div>
            <WAPFooter mpIcon={mpIcon} miniIcon={miniIcon} />
        </div>
    );
};

WAPStrategyList.getInitialProps = (async (ctx) => {
    const { page } = ctx.match.params;
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const strategies = ((await nbp.api.getArticles({ category, maxResultCount: maxCount, skipCount: (page - 1) * maxCount })).items.map(i => { return { id: i.id, title: i.title, pic: i.pic } }));
    return Promise.resolve({ logos, miniIcon, mpIcon, page, strategies });
}) as IGetInitialProps;

export default WAPStrategyList;