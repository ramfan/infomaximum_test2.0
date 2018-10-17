import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';

class ParticipantSwitches extends PureComponent {
    render() {
        const {
            activeColumn, activeSpan, disActiveSpan, disActiveColumn,
        } = this.props.theme.authForm;
        return (
            <Col style={{ color: 'green', height: '40px' }}>
                <Row justify={'center'}>
                    <Col md={4} style={activeColumn}>
                        <span style={activeSpan('0')}>ПОЛ</span>
                    </Col>
                    <Col md={4} style={disActiveColumn}>
                        <span style={disActiveSpan('0')}>ВОЗРАСТ</span>
                    </Col>
                    <Col md={4} style={disActiveColumn}>
                        <span style={disActiveSpan('0')}>ПРОФИЛЬ</span>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default withTheme(ParticipantSwitches);
