/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import EventForm from '../../containers/Event/EventForm';

class CreateForm extends PureComponent {
    render() {
        return (
            <Col md={12} style={this.props.theme.dashBoardSystem.CreateForm.rootStyle}>
                <Row style={this.props.theme.dashBoardSystem.CreateForm.row}>
                    <span style={this.props.theme.dashBoardSystem.CreateForm.span}>Создание события</span>
                </Row>
                <EventForm/>
            </Col>
        );
    }
}

export default withTheme(CreateForm);
