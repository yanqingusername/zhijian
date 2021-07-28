import React, { useEffect, useState } from 'react';
import './index.less';

interface SkuPanelProps {
    attr: any[];
    sku: string;
    onChange: (value: string | undefined) => void;
};

const SkuPanel = (props: SkuPanelProps) => {
    const { attr, sku, onChange } = props;
    const [selected, setSelected] = useState<string[]>();

    const handleChange = (index: number, sku: string) => {
        let temp = selected?.map((v, i) => {
            if (index === i) {
                return sku;
            }
            else {
                return v;
            }
        });
        onChange(temp?.join(','));
    };

    useEffect(() => {
        let selected: string[] = Array<string>(attr?.length);
        attr?.map((v, i) => {
            v.attr.map((j: string) => {
                if (sku?.indexOf(j) >= 0) {
                    selected[i] = j;
                }
            });
        });
        setSelected(selected);
    }, [sku]);

    return (
        <div className="product-sku-content">
            {
                attr?.map((v: any, i: any) => {
                    return (
                        <div className="item" key={v.name}>
                            <h3>{v.name}</h3>
                            <div className="skus">
                                {
                                    v.attr.map((j: any) => {
                                        return (
                                            sku?.indexOf(j) >= 0
                                                ? <a key={j} className="active">{j}</a>
                                                : <a key={j} onClick={() => { handleChange(i, j) }}>{j}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SkuPanel;