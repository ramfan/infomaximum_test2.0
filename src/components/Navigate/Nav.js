import React, {PureComponent} from 'react';
import {Col, Row} from 'react-grid-system';
import {CustomButton, CustomSpans} from '../../utils/CustomElements';
import logoIcon from '../../assets/logo.svg';
import {withTheme} from 'react-fela';
import GroupNavItems from './GroupNavItems';


class Nav extends PureComponent {

    render() {
        const { rootStyle, logo, logo_color, info, buttonRow, buttonCol, customButton } = this.props.theme.LeftBlock.mainPage;

        return (
            <Row>
                <Col md={12} >
                    <Row>
                        <Col md={12} style={logo}>
                            <Row >
                                <Col md={2} style={logo}>
                                    <img src={logoIcon} alt=""/>
                                </Col>
                                <Col md={10} style={logo}>
                                    <CustomSpans style={logo_color}>AdminEventDay</CustomSpans>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={this.props.theme.dispaly('contents')}>
                        <Col style={this.props.theme.paddingNull}>
                            <CustomButton
                                color={'#E5001C'}
                                margin={'0 auto'}
                                width={''}
                                boxShadow={'0px 1px 1px 0px rgba(224,224,224,1)'}
                                paddingTop={'8px'}
                                paddingBottom={'10px'}
                                paddingLeft={'40px'}
                                paddingRight={'35px'}
                                fontSize={'12px'}
                            >
                                + &nbsp; Создать событие
                            </CustomButton>
                        </Col>
                    </Row>
                    <Row style={buttonRow}>
                        <Col style={buttonCol}  onClick={this.toggleShow}>
                        </Col>
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
