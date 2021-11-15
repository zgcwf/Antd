import React, { Component } from 'react'
import { PageHeader, Button, Descriptions } from 'antd';
export default class PageHeaders extends Component {
    render() {
        const routes = [
            {
                path: 'index',
                breadcrumbName: 'First-level Menu',
            },
            {
                path: 'first',
                breadcrumbName: 'Second-level Menu',
            },
            {
                path: 'second',
                breadcrumbName: 'Third-level Menu',
            },
        ];
        return (

            <PageHeader
                className="site-page-header"
                title="Title"
                breadcrumb={{ routes }}
                subTitle="This is a subtitle"
            />

        )
    }
}
