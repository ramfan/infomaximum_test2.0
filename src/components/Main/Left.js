import React, {PureComponent} from 'react';
import {Row, Col} from 'react-grid-system';

class Left extends PureComponent {

    render() {
        return (
            <Row>
                <Col md={12} style={{background: '#95dd58'}}>
                    <span>Left</span>
                </Col>
            </Row>
        );
    }
}

export default Left;
