import React, {PureComponent} from 'react';
import {withTheme} from 'react-fela';
import {Col, Row} from 'react-grid-system';

class Card extends PureComponent {

    render() {
        const {icon, title, detail} = this.props;
        const { rootStyle, forIcon, titleStyle, titleColor, detail: detailStyle, detailFont  } = this.props.theme.landingPage.card;
        return (
            <Row style={rootStyle}>
                <Row style={forIcon}>
                    <Col md={6}>
                        <img src={icon} alt=""/>
                    </Col>
                </Row>
                <Row style={titleStyle}>
                    <Col md={12} style={titleColor}>
                        <span>
                            {title}
                        </span>
                    </Col>
                </Row>
                <Row style={detailStyle}>
                    <Col style={detailFont}>
                        <span>
                            {detail}
                        </span>
                    </Col>
                </Row>
            </Row>
        );
    }
}

export default withTheme(Card);
