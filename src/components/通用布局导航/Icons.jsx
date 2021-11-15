import React, { Component } from 'react'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    SmileTwoTone, HeartTwoTone, CheckCircleTwoTone,
    StarOutlined, StarFilled, StarTwoTone

} from '@ant-design/icons';
export default class Icons extends Component {

    render() {
        return (
            <div>
                <div >
                    <HomeOutlined />
                    <SettingFilled />
                    <SmileOutlined style={{ fontSize: '28px', color: 'red', border: '1px solid red' }} />
                    <SyncOutlined spin />
                    <SmileOutlined rotate={270} />
                    <LoadingOutlined />
                    <hr />

                    <SmileTwoTone />
                    <HeartTwoTone twoToneColor="#eb2f96" />
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <hr />


                    <StarOutlined />
                    <StarFilled />
                    <StarTwoTone twoToneColor="#eb2f96" />
                </div>
            </div>
        )
    }
}
