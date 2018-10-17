import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import DashSystemLayout from '../DashSystem/DashSystemLayout';

class System extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.systemLayout}>
                <Col>
                    <DashSystemLayout/>
                </Col>
            </Row>
        );
    }
}

export default withTheme(System);
