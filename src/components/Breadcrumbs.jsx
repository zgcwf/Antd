import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Alert, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
export default class Breadcrumbs extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        General
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        Layout
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        Navigation
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <UserOutlined />
                            <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href=""><UserOutlined /> <span>Application List</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <Breadcrumb separator="">
                        <Breadcrumb.Item>Location</Breadcrumb.Item>
                        <Breadcrumb.Separator>:</Breadcrumb.Separator>
                        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <hr />
                <hr />
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Component</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item overlay={menu}>
                            <a href="">General</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Button</Breadcrumb.Item>
                    </Breadcrumb>,
                </div>
                <div>

                </div>
            </div>
        )
    }
}
