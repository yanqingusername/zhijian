import './index.less';
import { scrollTo } from '@/utils/util';

export default () => {

    const toTop = () => {
        scrollTo();
    };

    return (
        <div className="sidebar">
            <div className="hotline">
                <div className="icon"></div>
                <span>咨询热线</span>
                <div className="over">
                    <div className="content">
                        <img src="/assets/hotline-p.png" />
                        <div className="info">
                            <h5>18501957368</h5>
                            <p>7*12小时贴心客服热线<br />周一至周日9:00-21:00</p>
                        </div>
                    </div>
                    <img src="/assets/icon-arrow-right.png" />
                </div>
            </div>
            <div className="top" onClick={() => toTop()}>
                <div className="icon"></div>
                <span>回顶部</span>
            </div>
        </div>
    );
};