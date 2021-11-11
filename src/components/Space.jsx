import React, { Component } from 'react'
import { Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
function SpaceDemo() {
    return (
        <div>
            <Space>
                Space
                <Button type="primary">Button</Button>

                <Button>
                    <UploadOutlined /> Click to Upload
                </Button>


                <Button>Confirm</Button>

            </Space>

            <div className="space-align-block">
                <Space align="center">
                    center
                    <Button type="primary">Primary</Button>
                    <span className="mock-block">Block</span>
                </Space>
            </div>
            <div className="space-align-block">
                <Space align="start">
                    start
                    <Button type="primary">Primary</Button>
                    <span className="mock-block">Block</span>
                </Space>
            </div>
            <div className="space-align-block">
                <Space align="end">
                    end
                    <Button type="primary">Primary</Button>
                    <span className="mock-block">Block</span>
                </Space>
            </div>
        </div>

    );
}
export default SpaceDemo