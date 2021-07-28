import { Collapse } from 'antd';
import { useEffect } from 'react';
import './index.less';

const { Panel } = Collapse;

interface PositionListProps {
    data?: any[];
    onChange: (key: string | string[]) => void;
}

const PositionList = (props: PositionListProps) => {
    const { data, onChange } = props;
    useEffect(() => { }, [data]);
    return (
        <Collapse
            className="pc-positions"
            bordered={false}
            expandIcon={(panel) => {
                if (panel.isActive) {
                    return (<div className="expand"><span>收起</span><img src="/assets/icon-drop-up.png" /></div>)
                }
                else {
                    return (<div className="expand"><span>展开</span><img src="/assets/icon-drop-down.png" /></div>)
                }
            }}
            expandIconPosition="right"
            onChange={onChange}
        >
            {
                data?.map((v) => {
                    return (
                        <Panel header={v.title} key={v.id} className="panel-container">
                            <div className="panel-content" dangerouslySetInnerHTML={{ __html: v.htmlContent }} />
                        </Panel>
                    )
                })
            }
        </Collapse>
    );
};

export default PositionList;