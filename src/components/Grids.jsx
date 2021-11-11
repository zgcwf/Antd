import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
export default class Grids extends Component {

    render() {
        const style = { background: '#0092ff', padding: '8px 10px' };
        // const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
        return (
            <div>
                <div>
                    <Divider orientation="left">分割线（文字偏左）</Divider>
                    <Row gutter={32}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                    <Divider orientation="left">Responsive</Divider>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                    <Divider orientation="left">Vertical</Divider>
                    <Row gutter={[16, 32]}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                    <Divider orientation="left">end</Divider>
                    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div style={style}>col-6</div>
                        </Col>
                    </Row>
                </div>
                <Divider />
                <div>
                    <Row>
                        <Col span={8} className='grids'>col-8</Col>
                        <Col span={8} offset={1} className='grids'>
                            col-8
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} offset={6} className='grids'>
                            col-6 col-offset-6
                        </Col>
                        <Col span={6} offset={6} className='grids'>
                            col-6 col-offset-6
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={7} className='grids'>
                            col-12 col-offset-6
                        </Col>
                    </Row>
                </div>
                <Divider />
                <div>
                    <Row>
                        {/* push往右推，pull往左拉 */}
                        <Col span={18} push={6} className='grids'>
                            col-18 col-push-6
                        </Col>
                        <Col span={6} pull={18} className='grids'>
                            col-6 col-pull-18
                        </Col>
                    </Row>,
                </div>
                <Divider />
                <div>
                    <Divider orientation="left">sub-element align left</Divider>
                    <Row justify="start">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <Divider orientation="left">sub-element align center</Divider>
                    <Row justify="center">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <Divider orientation="left">sub-element align right</Divider>
                    <Row justify="end">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <Divider orientation="left">sub-element monospaced arrangement</Divider>
                    <Row justify="space-between">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>

                    <Divider orientation="left">sub-element align full</Divider>
                    <Row justify="space-around">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                </div>
                <Divider />
                <Divider />
                <Divider />

                <div>
                    <Divider orientation="left">Align Top</Divider>
                    <Row justify="center" align="top" className='ba'>
                        <Col span={4} className='grids'>
                            1
                            {/* <DemoBox value={100}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            2
                            {/* <DemoBox value={50}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            3
                            {/* <DemoBox value={120}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            4
                            {/* <DemoBox value={80}>col-4</DemoBox> */}
                        </Col>
                    </Row>

                    <Divider orientation="left">Align Middle</Divider>
                    <Row justify="space-around" align="middle" className='ba'>
                        <Col span={4} className='grids'>
                            {/* <DemoBox value={100}>col-4</DemoBox> */}
                            1
                        </Col>
                        <Col span={4} className='grids'>
                            2
                            {/* <DemoBox value={50}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            3
                            {/* <DemoBox value={120}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            4
                            {/* <DemoBox value={80}>col-4</DemoBox> */}
                        </Col>
                    </Row>

                    <Divider orientation="left">Align Bottom</Divider>
                    <Row justify="space-between" align="bottom" className='ba'>
                        <Col span={4} className='grids'>
                            1
                            {/* <DemoBox value={100}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            2
                            {/* <DemoBox value={50}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            3
                            {/* <DemoBox value={120}>col-4</DemoBox> */}
                        </Col>
                        <Col span={4} className='grids'>
                            4
                            {/* <DemoBox value={80}>col-4</DemoBox> */}
                        </Col>
                    </Row>
                    <br />

                </div>
                <Divider />
                <Divider />
                <Divider />
                <div>
                    <Divider orientation="left">Normal</Divider>
                    <Row>
                        <Col span={6} order={4} className='grids'>
                            1 col-order-4
                        </Col>
                        <Col span={6} order={3} className='grids'>
                            2 col-order-3
                        </Col>
                        <Col span={6} order={2} className='grids'>
                            3 col-order-2
                        </Col>
                        <Col span={6} order={1} className='grids'>
                            4 col-order-1
                        </Col>
                    </Row>
                    <Divider orientation="left">Responsive</Divider>
                    <Row>
                        <Col className='grids' span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            1 col-order-responsive
                        </Col>
                        <Col className='grids' span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
                            2 col-order-responsive
                        </Col>
                        <Col className='grids' span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
                            3 col-order-responsive
                        </Col>
                        <Col className='grids' span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
                            4 col-order-responsive
                        </Col>
                    </Row>
                </div>
                <Divider /><Divider />
                <div>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            Col
                        </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                            Col
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            Col
                        </Col>
                    </Row>,
                </div>
                <div>
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='grids'>
                            Col
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className='grids'>
                            Col
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='grids'>
                            Col
                        </Col>
                    </Row>,
                </div>
            </div>
        )
    }
}



