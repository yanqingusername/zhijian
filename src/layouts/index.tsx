import nbp from '@/services/nbp';
import { useEffect } from "react";
import { history, IGetInitialProps } from 'umi';

const Index = (props: any) => {
    const { location, children } = props;
    const { pathname } = location;

    useEffect(() => {
        const provider = window.innerWidth > 1200 ? 'P' : 'M';
        const path = pathname.toLowerCase();
        if (path.indexOf('pc') != -1 || path.indexOf('wap') != -1) {
            if (provider === 'P') {
                if (path.indexOf('wap') != -1) {
                    const newPath = path.replace(/wap/i, 'pc');
                    history.push(newPath);
                }
            }
            else {
                if (path.toLowerCase().indexOf('pc') != -1) {
                    const newPath = path.replace(/pc/i, 'wap');
                    history.push(newPath);
                }
            }
        }
        else {
            if (provider === 'P') {
                history.push(`/pc${path}`);
            }
            else {
                history.push(`/wap${path}`);
            }
        }
    }, []);

    return (
        <>{children}</>
    )
}

export default Index;