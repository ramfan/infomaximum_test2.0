import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';
import { Col, Row } from 'react-grid-system';

class Stats extends PureComponent {
    render() {
        return (
            <Row style={{
                marginLeft: 0, marginRight: 0, marginTop: '1%',
            }}>
                <Col md={12}>
                    <img src={this.props.icon} style={{ display: 'block', margin: '0 auto' }}/>
                </Col>
                <Col md={4} offset={{ md: 2 }} style={{ display: 'block', margin: '0 auto', color: 'black' }}>
                    <Row>
                        <Row justify={'between'} align="center">
                            <Col md={1}>
                                <span style={{
                                    width: '30px', height: '30px', display: 'block', background: '#86CCFF', borderRadius: '50%',
                                }}></span>
                            </Col>
                            <Col md={10}>
                                <span style={{
                                    display: 'table', margin: '0 auto', color: 'rgba(0, 0, 0, 0.54)', padding: '12px',
                                }}>{this.props.prop[0]}</span>
                            </Col>
                        </Row>
                        <Row justify={'between'} align="center">
                            <Col md={1}>
                                <span style={{
                                    width: '30px', height: '30px', display: 'block', background: '#6202EE', borderRadius: '50%',
                                }}></span>
                            </Col>
                            <Col md={10}>
                                <span style={{
                                    display: 'table', margin: '0 auto', color: 'rgba(0, 0, 0, 0.54)', padding: '12px',
                                }}>{this.props.prop[1]}</span>
                            </Col>
                        </Row>
                        <Row justify={'between'} align="center">
                            <Col md={1}>
                                <span style={{
                                    width: '30px', height: '30px', display: 'block', background: '#FA15FF', borderRadius: '50%',
                                }}></span>
                            </Col>
                            <Col md={10}>
                                <span style={{
                                    display: 'table', margin: '0 auto', color: 'rgba(0, 0, 0, 0.54)', padding: '12px',
                                }}>{this.props.prop[2]}</span>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Stats);
