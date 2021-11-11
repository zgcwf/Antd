import React, { useState } from 'react';
import { Affix, Button } from 'antd';


export default function Demo() {
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    const [container, setContainer] = useState(null);
    return (
        <div>
            <Affix offsetTop={top}>
                <Button type="primary" onClick={() => setTop(top + 10)}>
                    Affix top
                </Button>
            </Affix>
            <br />
            <Affix offsetBottom={bottom}>
                <Button type="primary" onClick={() => setBottom(bottom + 10)}>
                    Affix bottom
                </Button>
            </Affix>

            <hr />
            <Affix offsetTop={10} onChange={(affixed) => console.log(affixed)}>
                <Button>120px to affix top</Button>
            </Affix>,
            <hr />
            <div className="scrollable-container" ref={setContainer}>
                <div className="background">
                    <Affix target={() => container}>
                        <Button type="primary">Fixed at the top of container</Button>
                    </Affix>
                </div>
            </div>
            {/* br */}
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}
