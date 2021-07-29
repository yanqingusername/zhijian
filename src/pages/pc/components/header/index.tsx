import Menus from '@/menus';
import { useEffect } from 'react';
import './index.less';

interface HeaderProps {
    top: boolean;
    logos?: string[];
    miniIcon?: string;
    page?: string;
}

const Header = (props: HeaderProps) => {
    const { top, logos, miniIcon, page } = props;

    useEffect(() => { }, [top, logos, miniIcon, page]);
    return (
        <header className={top === true ? "pc-headerTop" : "pc-header"}>
            <div className="container">
                <div className="left">
                    {
                        top === true
                            ? <a href="/pc" className="logo"><img src="/assets/icon-shop-logo-02.png" /></a>
                            : <a href="/pc" className="logo"><img src="/assets/icon-shop-logo-01.png" /></a>
                    }
                    <nav className="navs">
                        {
                            Menus.map(v => {
                                return (
                                    <div className="item" key={v.page}>
                                        {
                                            page === v.page
                                                ? <a className="active">{v.name}</a>
                                                : <a href={`/pc${v.url}`}>{v.name}</a>
                                        }
                                        {
                                            v.items && v.items.length > 0
                                                ? <div className="menu">
                                                    {
                                                        v.items.map((m: any) => {
                                                            return (
                                                                page === m.page
                                                                    ? <a className="active" key={m.page}>{m.name}</a>
                                                                    : <a href={`/pc${m.url}`} key={m.page}>{m.name}</a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </nav></div>
                <div className="right">
                    <div className="button">
                        {
                            top === true
                                ? <img src="/assets/icon-xcx.svg" />
                                : <img src="/assets/icon-xcx-01.svg" />
                        }
                        <span>小程序</span>
                    </div>
                    <div className="drop">
                        <img src={miniIcon} />
                        <span>微信扫一扫体验</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;