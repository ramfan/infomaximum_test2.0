import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import GoToBack from '../../containers/Dashboard/GoToBack';
import CreateForm from './CreateForm';

class CreateEvent extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.systemLayout}>
                <Col>
                    <Row style={{ marginBottom: '5%' }}>
                        <GoToBack/>
                    </Row>
                    <Row>
                        <CreateForm/>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(CreateEvent);
