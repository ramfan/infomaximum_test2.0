import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';

class Layout extends PureComponent {
    render() {
        return (
            <Container fluid style={{ paddingRight: 0, color: 'red', padding: 0 }}>
                <Row style={{ marginLeft: 0, marginRight: 0, color: 'black' }}>
                    <Col md={2}>
                        {this.props.left}
                    </Col>
                    <Col md={10} >
                        {this.props.right}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTheme(Layout);
