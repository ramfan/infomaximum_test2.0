import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import Descriptions from '../Descriptions';
import Insriptions from '../Insriptions';


class EventParticipant extends PureComponent {
    render() {
        return (
            <Row justify={'start'} align={'center'}>
                <Col md={1}>
                    <Descriptions description={this.props.num}/>
                </Col>
                <Col md={2}><img src={this.props.avatar} alt=''/></Col>
                <Col>
                    <Descriptions description={this.props.name}/>
                    <Insriptions inscription={this.props.role}/>
                </Col>
            </Row>

        );
    }
}

export default EventParticipant;
