import { useEffect } from 'react';
import styles from './index.less';

export interface BreadcrumbDto {
    key: string;
    value?: string;
    first?: boolean;
    current?: boolean;
}

interface BreadcrumbProps {
    data: BreadcrumbDto[];
}

interface BreadCrumbItemProps {
    data: BreadcrumbDto;
}

const BreadCrumbItem: React.FC<BreadCrumbItemProps> = (props) => {
    const { data } = props;
    return (
        <>
            {
                data.first === true ? null : <span>&gt;</span>
            }
            {
                data.value
                    ? <a href={data.value}>{data.key}</a>
                    :
                    data.current
                        ? <span className={styles.current}>{data.key}</span>
                        : <span>{data.key}</span>
            }
        </>
    );
};

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
    const { data } = props;
    useEffect(() => { }, [data]);

    return (
        <div className={styles.breadcrumb}>
            {
                data.map((v, i) => <BreadCrumbItem data={v} key={i} />)
            }
        </div>
    );
};

export default Breadcrumb;