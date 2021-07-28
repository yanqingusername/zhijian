import Menus from '@/menus';
import Menu from '@/pages/wap/components/menu';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import './index.less';

interface HeaderProps {
    back?: boolean;
    logos?: string[];
    page?: string;
}

const Header = (props: HeaderProps) => {
    const { back, logos, page } = props;
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => { }, [logos, back, page]);
    return (
        <>
            <header className="wap-header">
                <div className="container">
                    <div className="left">
                        {
                            back === true
                                ?
                                <a className="back" onClick={() => { history.goBack() }}><img src="/assets/icon-arrow-left.png" /></a>
                                : <a href="/wap" className="logo"><img src={logos?.[0]} /></a>
                        }
                    </div>
                    <div className="right">
                        <a className="menuButton"><img src="/assets/icon-menu.png" onClick={() => { setShowMenu(!showMenu); }} /></a>
                    </div>
                </div>
            </header>
            <nav className={showMenu ? "wap-menu show" : "wap-menu hide"}>
                {
                    Menus.map((v, i) => {
                        return (
                            <Menu data={v} page={page} key={i} />
                        )
                    })
                }
            </nav>
        </>
    );
}

export default Header;