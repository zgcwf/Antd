import React, { Component } from 'react'
import { Pagination } from 'antd';
export default class Paginations extends Component {
    render() {

        function showTotal(total, range) {
            console.log(total, range);
        }
        return (
            <div>
                <Pagination size="small" total={50} />
                <Pagination size="small" total={150} showQuickJumper />
                <Pagination size="small" total={50} showTotal={showTotal} />
                <Pagination
                    size="small"
                    total={50}
                    disabled
                    showTotal={showTotal}
                    showSizeChanger
                    showQuickJumper
                />
                <br />
                <Pagination simple defaultCurrent={2} total={50} />
                <br />
                <Pagination disabled simple defaultCurrent={2} total={50} />
                <hr />
                <Pagination
                    total={85}
                    showTotal={total => `Total ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                />
                <br />
                <Pagination
                    total={85}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1}
                />
            </div>
        )
    }
}


