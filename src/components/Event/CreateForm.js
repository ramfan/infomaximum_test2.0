import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import EventForm from '../../containers/Event/EventForm';

class CreateForm extends PureComponent {
    render() {
        return (
            <Col md={12} style={{ background: 'white', padding: '20px' }}>
                <Row style={{ margin: 'auto' }}>
                    <span style={{ fontSize: '34px', letterSpacing: '0.25px' }}>Создание события</span>
                </Row>
                <EventForm/>
            </Col>
        );
    }
}

export default CreateForm;
