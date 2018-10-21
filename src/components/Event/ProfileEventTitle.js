/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';

class ProfileEventTitle extends PureComponent {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <span style={this.props.theme.dashBoardSystem.ProfileEventTitle}>Осенний хакатон HACKSARANSK 2018</span>
                </Col>
            </Row>
        );
    }
}

export default withTheme(ProfileEventTitle);
