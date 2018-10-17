import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';
import { Col, Row } from 'react-grid-system';

class DeveloperCard extends PureComponent {
    render() {
        const {
            rootStyle, avatarCol, avatar, devName, devRole, social,
        } = this.props.theme.landingPage.devCard;
        return (
            <Row justify={'between'} style={rootStyle}>
                <Col md={12}>
                    <Row justify={'between'}>
                        <Col md={12}>
                            <Row >
                                <Col md={12} style={avatarCol}>
                                    <img src={this.props.avatar} width={'100%'} height={'100%'} style={avatar} alt=''/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row justify={'center'}>
                        <Col md={12}>
                            <span style={devName}>
                                {this.props.name}
                            </span>
                        </Col>
                    </Row >
                    <Row justify={'center'}>
                        <Col md={12}>
                            <span style={devRole}>
                                {this.props.roleInProject}
                            </span>
                        </Col>
                    </Row>
                    <Row justify={'center'}>
                        <Col md={12}>
                            <span style={social}>
                                {this.props.social}
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(DeveloperCard);
