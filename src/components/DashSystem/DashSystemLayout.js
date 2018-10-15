import React, {PureComponent} from 'react';
import {Row, Col} from 'react-grid-system';
import Event from './Event';

class DashSystemLayout extends PureComponent {

    render() {
        return (
            <Col>
                <Event/>
            </Col>
        );
    }
}

export default DashSystemLayout;
