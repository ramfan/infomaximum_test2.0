/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';

class Layout extends PureComponent {
    render() {
        return (
            <Container fluid style={Object.assign(this.props.theme.paddingNull, this.props.theme.marginNull)}>
                <Row style={this.props.theme.Layout}>
                    <Col md={2}>
                        {this.props.left}
                    </Col>
                    <Col md={10}>
                        {this.props.right}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTheme(Layout);
