import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Subscriptions from '../Subscriptions';
import Button from '../Button';

class YourCard extends PureComponent {
    render() {
        return (
            <Col style={{ background: 'white', padding: '16px 30px 16px 30px' }}>
                <Row>
                    <Col md={10}>
                        <Row style={{ margin: '1%' }}>
                            <span style={{ fontSize: '10px', letterSpacing: '1.5px' }}>{this.props.title}</span>
                        </Row>
                        <Row style={{ margin: '1%' }}>
                            <span style={{ fontSize: '24px' }}>{this.props.name}</span>
                        </Row>
                        <Row style={{ margin: '1%' }}>
                            <Subscriptions subscription={this.props.additional}/>
                        </Row>
                    </Col>
                    <Col md={2}>
                        <img src={this.props.icon} style={{ width: '50%', float: 'right' }}/>
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
