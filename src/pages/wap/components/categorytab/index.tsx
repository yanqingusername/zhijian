import nbp from '@/services/nbp';
import { useEffect } from 'react';
import './index.less';

interface CategoryTabProps {
    categories?: any[];
    current?: string;
}

const CategoryTab = (props: CategoryTabProps) => {
    const { categories, current } = props;

    const handleChange = (category: any) => {
        window.location.href = `/product/list/${category}/1`;
    }

    useEffect(() => {
    }, [categories, current]);

    return (
        <nav className="categorytabs">
            {
                categories?.map((i: any) => {
                    if (current === i.code) {
                        return (
                            <div className="itemActive" key={i.id}>
                                <img src={nbp.request.mediaUrl(i.icons[1])} />
                                <span>{i.name}</span>
                                <span className="underline"></span>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className="item" key={i.id} onClick={() => handleChange(i.code)}>
                                <img src={nbp.request.mediaUrl(i.icons[0])} />
                                <span>{i.name}</span>
                            </div>
                        );
                    }
                })
            }
        </nav>
    );;
}

export default CategoryTab;