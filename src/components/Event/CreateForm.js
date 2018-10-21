import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import EventForm from '../../containers/Event/EventForm';

class CreateForm extends PureComponent {
    render() {
        return (
            <Col md={12} style={this.props.theme.dashBoardSystem.CreateForm.rootStyle}>
                <Row style={this.props.theme.dashBoardSystem.CreateForm.row}>
                    <span style={{ fontSize: '34px', letterSpacing: '0.25px' }}>Создание события</span>
                </Row>
                <EventForm/>
            </Col>
        );
    }
}

export default withTheme(CreateForm);
