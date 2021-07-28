import '@/global.less';
import nbp from '@/services/nbp';
import { floor, toTheBottom } from '@/utils/util';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { IGetInitialProps, useRequest } from 'umi';
import PCFooter from '../../../components/footer';
import ShopHeader from '../../../components/shopheader';
import SideBar from '../../../components/sidebar';
import './[page].less';

const maxCount = 20;

interface PCProductListInitialProps extends IGetInitialProps {
    logos?: string[];
    miniIcon?: string;
    mpIcon?: string;
    footerLinks?: any[];
    page?: number;
    categories?: any[];
    current?: string;
    products?: any[];
}

const PCProductList = (props: PCProductListInitialProps) => {
    const { logos, miniIcon, mpIcon, footerLinks, page, categories, current, products } = props;
    const [newProducts, setNewProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const maxCount = 20;

    const { run: doGetProducts, loading } = useRequest(nbp.api.getProducts, {
        manual: true,
        onSuccess: (result) => {
            if (result.items.length > 0) {
                setNewProducts(newProducts.concat(result.items));
                if (result.items.length === maxCount) {
                    setCurrentPage(currentPage + 1);
                    window.addEventListener('scroll', listeningScroll, false);
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

    const getMore = () => {
        if (hasMore) {
            doGetProducts({ category: current, maxResultCount: maxCount, skipCount: (maxCount * (currentPage - 1)) });
        }
    };

    const listeningScroll = () => {
        const state = toTheBottom();
        if (state) {
            window.removeEventListener('scroll', listeningScroll, false);
            getMore();
        }
    };

    useEffect(() => {
        if (products && page) {
            if (products.length === maxCount) {
                setHasMore(true);
            }
            setCurrentPage(page);
            setNewProducts(products);
        }
    }, [logos, miniIcon, mpIcon, page, categories, current, products]);

    useEffect(() => {
    }, [newProducts, hasMore]);

    return (
        <div className="pc-pageContainer">
            <ShopHeader logos={logos} miniIcon={miniIcon} categories={categories} current={current} />
            <div className="mainContent top-to-head">
                <div className="productContainer">
                    <div className="list">
                        {
                            newProducts.map((v) => {
                                return (
                                    <a href={`/product/detail/${v.id}`} className="item" key={v.id}>
                                        <img src={nbp.request.mediaUrl(v.pic)} />
                                        <h3>{v.name}</h3>
                                        <span className="price">￥{floor(v.price, 2)}</span>
                                        <span className="button">立即购买</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    loading ? <div className="loadingMore">加载中<LoadingOutlined /></div> : null
                }

            </div>
            <PCFooter mpIcon={mpIcon} miniIcon={miniIcon} links={footerLinks} />
            <SideBar />
        </div>
    );
};

PCProductList.getInitialProps = (async (ctx) => {
    const { category, page } = ctx.match.params;
    let currentPage = page || 1;
    const logos = (await nbp.api.getAdverts({ code: 'LOGOS', provider: 'PM', single: false })).items.map((i) => nbp.request.mediaUrl(i.source));
    const miniIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MINIPROGRAMICON', provider: 'PM', single: true })).space.source);
    const mpIcon = nbp.request.mediaUrl((await nbp.api.getAdverts({ code: 'MPICON', provider: 'PM', single: true })).space.source);
    const footerLinks = (await nbp.api.getAdverts({ code: 'FOOTER-LINKS', provider: 'P', single: false })).items;
    const categories = ((await nbp.api.getCategories('P', { level: 1 })).items);
    let current = category || categories[0].code;
    const products = ((await nbp.api.getProducts({ category: current, active: true, maxResultCount: maxCount, skipCount: (currentPage - 1) * maxCount })).items)
    return Promise.resolve({ logos, miniIcon, mpIcon, footerLinks, page: currentPage, categories, current, products });
}) as IGetInitialProps;

export default PCProductList;