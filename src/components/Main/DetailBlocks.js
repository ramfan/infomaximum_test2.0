/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';

class DetailBlocks extends PureComponent {
    render() {
        const {
            secondBlock: {
                height,
                paddingBottom,
                marginBottom,
                marginLeft,
                marginRight,
                marginTop,
                textAlign,
                line,
                title,
                otherText,
                otherTextColor,
            },
        } = this.props.theme.landingPage;
        return (
            <Row justify={'between'} style={{ paddingBottom, background: this.props.color, height }}>
                <Col md={2}></Col>
                <Col md={8} style={{
                    marginTop, marginBottom, marginLeft, marginRight, textAlign,
                }}>
                    <Row>
                        <Col>
                            <h3 style={title}>{this.props.title}</h3>
                        </Col>
                    </Row>
                    <Row justify='center'>
                        <Col xs={1} style={line}><p></p></Col> <br/>
                    </Row>
                    <Row justify='center'>
                        <Col md={8} style={otherText}>
                            {this.props.isOtherText ? <span style={otherTextColor}>{this.props.otherText}</span> : null}
                        </Col>
                    </Row>
                    <Row justify={'between'}>
                        <Col md={12}>
                            {this.props.info}
                        </Col>
                    </Row>

                </Col>
                <Col md={2}></Col>
            </Row>
        );
    }
}

export default withTheme(DetailBlocks);
