import React, { Component } from 'react'
import { Tree } from 'antd';
const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: (
                            <span
                                style={{
                                    color: '#1890ff',
                                }}
                            >
                                sss
                            </span>
                        ),
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
];

export default () => {
    // 点击树节点触发，selectedKeys设置选中的树节点
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    // 点击复选框触发，checkedKeys选中全部复选框已选择的树节点
    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return (
        <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
        />
    );
};