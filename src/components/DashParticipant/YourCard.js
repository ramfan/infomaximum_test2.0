import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Subscriptions from '../Subscriptions';
import Button from '../Button';

class YourCard extends PureComponent {
    render() {
        const {
            rootStyle, row, title, name, icon,
        } = this.props.theme.dashBoardParticipant.YourCard;
        return (
            <Col style={rootStyle}>
                <Row>
                    <Col md={10}>
                        <Row style={row}>
                            <span style={title}>{this.props.title}</span>
                        </Row>
                        <Row style={row}>
                            <span style={name}>{this.props.name}</span>
                        </Row>
                        <Row style={row}>
                            <Subscriptions subscription={this.props.additional}/>
                        </Row>
                    </Col>
                    <Col md={2}>
                        <img src={this.props.icon} style={icon}/>
                    </Col>
                </Row>
                <Row justify={'start'}>
                    <Col md={2}>
                        <Button description={'ПОДРОБНЕЕ'}/>
                    </Col>
                    <Col md={1}>
                        <Button description={'РЕДАКТИРОВАТЬ'}/>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default withTheme(YourCard);
