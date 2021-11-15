import React, { useState } from 'react';
import { Typography, Switch } from 'antd';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

function Demo() {
    // const [内部当前的状态值, 更新状态值的函数] = useState(第一次初始化指定的值在内部作缓存);
    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
    const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
    const [lengthLimitedStr, setLengthLimitedStr] = useState(
        'This is an editable text with limited length.',
    );
    const [ellipsis, setEllipsis] = React.useState(true);
    return (
        <>
            <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
            <Paragraph
                editable={{
                    icon: <HighlightOutlined />,
                    tooltip: '点击编辑',
                    onChange: setCustomIconStr,
                }}
            >
                {customIconStr}
            </Paragraph>
            <Paragraph editable={{ tooltip: false, onChange: setHideTooltipStr }}>
                {hideTooltipStr}
            </Paragraph>
            <Paragraph
                editable={{
                    onChange: setLengthLimitedStr,
                    maxLength: 500,
                    autoSize: { maxRows: 5, minRows: 3 },
                }}
            >
                {lengthLimitedStr}
            </Paragraph>
            <Paragraph copyable>This is a copyable text.</Paragraph>
            <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
            <Paragraph
                copyable={{
                    icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                    tooltips: ['click here', 'you clicked!!'],
                }}
            >
                Custom Copy icon and replace tooltips text.
            </Paragraph>
            <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
            <hr />
            <hr />
            <Switch
                checked={ellipsis}
                onChange={() => {
                    setEllipsis(!ellipsis);
                }}
            />
            <hr />

            <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: '展开' }}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Paragraph ellipsis={ellipsis ? { rows: 3, expandable: true, symbol: 'more' } : false}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Text
                style={ellipsis ? { width: 100 } : undefined}
                ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
            >
                Ant Design, a design language for background applications, is refined by Ant UED Team.
            </Text>
        </>
    );
};
export default Demo