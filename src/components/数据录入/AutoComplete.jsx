import React, { useState } from 'react';
import { AutoComplete } from 'antd';
// 基本使用

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
    // value：输入的字符串重复几次，默认一次
});

export default () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const onSearch = (searchText) => {
        // 搜索时输入框中的内容
        setOptions(
            !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
        console.log('onSearch', options);
    };

    const onSelect = (data) => {
        //option项被选中时调用，参数为选中项的 value 值
        console.log('onSelect', data);
    };

    const onChange = (data) => {
        // 选中 option项，或 input 的 value 变化时，调用此函数
        console.log('onChange', data);

        setValue(data);
    };

    return (
        <>
            {/*options：选项内容 */}
            <AutoComplete
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
            />
            <br />
            <br />
            {/* value：指定当前选中的条目 */}
            <AutoComplete
                value={value}
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={onChange}
                placeholder="control mode"
            />
        </>
    );
};

