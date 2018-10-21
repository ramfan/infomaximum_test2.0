import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';

class EventCard extends PureComponent {
    render() {
        const {
            rootStyle, title, counter, span, subTitle, switches,
        } = this.props.theme.dashBoardSystem.EventCard;
        return (
            <div style={rootStyle}>
                <Row style={title}>
                    <Col>
                        <span style={title.font}>{this.props.title}</span>
                    </Col>
                </Row>
                <Row style={title}>
                    <Col>
                        <span style={subTitle}>{this.props.subTitle}</span>
                    </Col>
                </Row>
                <Row style={counter}>
                    <Col>
                        <span style={span}>{this.props.num}</span>
                        &nbsp;&nbsp;
                        <span>{this.props.word}</span>
                    </Col>
                </Row>
                <Row style={switches}>
                    {this.props.switcheses}
                </Row>
                {this.props.detailInfo}
            </div>

        );
    }
}


export default withTheme(EventCard);
