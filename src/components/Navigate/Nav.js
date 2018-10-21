/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { CustomButton, CustomSpans } from '../../utils/CustomElements';
import logoIcon from '../../assets/logo.svg';
import GroupNavItems from './GroupNavItems';
import CreateEventButton from '../../containers/Navigate/CreateEventButton';


class Nav extends PureComponent {
    render() {
        const {
            rootStyle, logo, logoColor, info, buttonRow, buttonCol, customButton,
        } = this.props.theme.LeftBlock.mainPage;

        return (
            <Row>
                <Col md={12} >
                    <Row>
                        <Col md={12} style={logo}>
                            <Row style={this.props.theme.center}>
                                <Col md={2} style={logo}>
                                    <img src={logoIcon} alt=''/>
                                </Col>
                                <Col md={10} style={logo}>
                                    <CustomSpans style={logoColor}>AdminEventDay</CustomSpans>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={this.props.theme.display('contents')}>
                        <CreateEventButton path={this.props.path} description={this.props.description}/>
                    </Row>

                    <Row >
                        <Col md={12} style={{}}>
                            <GroupNavItems/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Nav);
