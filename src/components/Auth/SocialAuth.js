import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Social from './Social';
import facebook from '../../assets/ICON FACEBOOK.svg';
import vk from '../../assets/XMLID 807.svg';
import twitter from '../../assets/ICON TWITTER.svg';

class SocialAuth extends PureComponent {
    render() {
        return (
            <Row justify={'between'}>
                <Col md={1}></Col>
                <Col style={this.props.theme.authForm.socialBlock.root}>
                    <Row>
                        <Col style={this.props.theme.authForm.socialBlock.title}>
                            <span>{this.props.headerBlock}</span>
                        </Col>
                    </Row>
                    <Row justify={'between'} style={this.props.theme.authForm.socialBlock.Icons}>
                        <Social social={facebook}/>
                        <Social social={twitter}/>
                        <Social social={vk}/>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
        );
    }
}

export default withTheme(SocialAuth);
