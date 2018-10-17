/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';


class Free extends PureComponent {
    render() {
        return (
            <Row>
                <Col style={{ width: '100%' }}>
                    <Row justify={'between'}>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <span style={this.props.theme.landingPage.freeStyle}><strong>БЕСПЛАТНО</strong></span>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={this.props.theme.landingPage.card.detailFont}>
                                Мы сделали этот сервис на осеннем хакатоне HACKSARANSK 2018. Поэтому сервис абсолютно бесплатен
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Free);
