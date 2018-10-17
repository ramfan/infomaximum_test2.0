import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';

class EventCard extends PureComponent {
    render() {
        return (
            <div style={{ width: '33%', background: 'white' }}>
                <Row style={{ marginLeft: 0, marginRight: 0, marginTop: '1%' }}>
                    <Col>
                        <span style={{ fontSize: '24px' }}>{this.props.title}</span>
                    </Col>
                </Row>
                <Row style={{ marginLeft: 0, marginRight: 0, marginTop: '1%' }}>
                    <Col>
                        <span style={{
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.54)',
                        }}>{this.props.subTitle}</span>
                    </Col>
                </Row>
                <Row style={{ marginLeft: 0, marginRight: 0, marginTop: '1%' }}>
                    <Col>
                        <span style={{
                            fontSize: '60px',
                        }}>{this.props.num}</span>
                        &nbsp;&nbsp;
                        <span>{this.props.word}</span>
                    </Col>
                </Row>
                <Row style={{
                    marginLeft: 0, marginRight: 0, marginTop: '1%', display: 'block', height: '40px',
                }}>
                    {this.props.switcheses}
                </Row>
                {this.props.detailInfo}
            </div>

        );
    }
}


export default EventCard;
