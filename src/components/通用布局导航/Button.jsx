import React, { Component } from 'react'
import { Button, Radio, Menu, Dropdown } from 'antd';
import { DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';


export default class Buttons extends Component {
    state = {
        size: 'large',
        loadings: [],
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    enterLoading = index => {
        this.setState((state) => {
            const newLoadings = [...state.loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 2000);
    };


    handleMenuClick = (e) => {
        console.log('click', e);
    }



    render() {
        const { size, loadings } = this.state;
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return (
            <>
                <div>
                    <Button className='right' type="primary" size="large">Primary Button</Button>
                    <Button className='right' >Default Button</Button>
                    <Button className='right' type="dashed" size="small">Dashed Button</Button>
                    <Button className='right' type="text">Text Button</Button>
                    <Button className='right' type="link">Link Button</Button>
                    <br />
                    <br />
                    <hr />
                </div>

                <div>
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>
                        Dashed
                    </Button>
                    <Button type="link" size={size}>
                        Link
                    </Button>
                    <br />
                    <br />

                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                    <br />
                    <br />
                    <hr />
                </div>

                <div>
                    <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => this.enterLoading(1)}
                    >
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => this.enterLoading(2)}
                    />
                    <br />
                    <br />
                    <hr />
                </div>

                <div className="site-button-ghost-wrapper">
                    <Button type="primary" ghost>
                        Primary
                    </Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>
                        Dashed
                    </Button>
                    <Button type="primary" danger ghost>
                        Danger
                    </Button>
                    <Button danger>Danger Default</Button>
                    <Button danger disabled>
                        Danger Default(disabled)
                    </Button>
                    <br />
                    <br />
                    <hr />
                </div>
                <div>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
                </div>
            </>
        )
    }
}

