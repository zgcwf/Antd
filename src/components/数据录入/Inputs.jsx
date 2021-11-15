import React, { Component } from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { TextArea } = Input;

export default class Demo extends React.Component {
    state = {
        value: '',
    };

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <>
                <TextArea placeholder="Autosize height based on content lines" autoSize />
                <div style={{ margin: '24px 0' }} />
                <TextArea
                    placeholder="Autosize height with minimum and maximum number of lines"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                />
                <div style={{ margin: '24px 0' }} />
                <TextArea
                    value={value}
                    onChange={this.onChange}
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
            </>
        );
    }
}

