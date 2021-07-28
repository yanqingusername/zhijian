import React, { useState } from 'react';
import './index.less';

interface MenuItemProps {
    data: any;
    page?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { data, page } = props;
    const [collapsible, setCollapsible] = useState<boolean>(false);

    return (
        <div className="menu-item">
            {
                data.items && data.items.length > 0
                    ?
                    <>
                        <div className="container">
                            {
                                page === data.page
                                    ? <a className="active">{data.name}</a>
                                    : <a href={`/wap${data.url}`}>{data.name}</a>
                            }
                            <a className={collapsible ? "collapsed" : "uncollapsed"} onClick={() => setCollapsible(!collapsible)}><img src="/assets/icon-arrow-down.png" /></a>
                        </div>
                        <div className={collapsible ? "sub show" : "sub hide"}>
                            {
                                data.items.map((m: any) => {
                                    return (
                                        page === m.page
                                            ? <a className="active" key={m.page}>{m.name}</a>
                                            : <a href={`/wap${m.url}`} key={m.page}>{m.name}</a>
                                    )
                                })
                            }
                        </div>
                    </>
                    :
                    <>
                        {
                            page === data.page
                                ? <a className="active">{data.name}</a>
                                : <a href={`/wap${data.url}`}>{data.name}</a>}
                    </>
            }
        </div>
    );
}

export default MenuItem;