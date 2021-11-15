import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { Component } from 'react'

export default class Dropdowns extends Component {
    render() {
        const { SubMenu } = Menu;

        const menu = (
            <Menu>
                <Menu.ItemGroup title="Group title">
                    <Menu.Item>1st menu item</Menu.Item>
                    <Menu.Item>2nd menu item</Menu.Item>
                </Menu.ItemGroup>
                <SubMenu title="sub menu">
                    <Menu.Item>3rd menu item</Menu.Item>
                    <Menu.Item>4th menu item</Menu.Item>
                    <SubMenu title="sub menu -ch">
                        <Menu.Item>3rd menu item</Menu.Item>
                        <Menu.Item>4th menu item</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu title="disabled sub menu" disabled>
                    <Menu.Item>5d menu item</Menu.Item>
                    <Menu.Item>6th menu item</Menu.Item>
                </SubMenu>
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Cascading menu <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        )
    }
}


