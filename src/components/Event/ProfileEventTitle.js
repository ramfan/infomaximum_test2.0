import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';

class ProfileEventTitle extends PureComponent {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <span style={{ fontSize: '34px', letterSpacing: '0.25px' }}>Осенний хакатон HACKSARANSK 2018</span>
                </Col>
            </Row>
        );
    }
}

export default ProfileEventTitle;
