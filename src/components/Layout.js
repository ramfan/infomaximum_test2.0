import React, {PureComponent} from 'react';
import {Container, Row, Col} from 'react-grid-system';

class Layout extends PureComponent {

    render() {
        return (
            <Container fluid>
                <Row >
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

export default Layout;
