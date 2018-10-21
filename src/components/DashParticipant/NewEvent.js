import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Button from '../Button';
import Subscriptions from '../Subscriptions';
import unknownPng from '../../assets/unknownPNG.png';
import RowDescription from './RowDescription';
import TextDescription from './TextDescription';
import AdditionalDescription from './AdditionalDescription';
import NewEventButton from './NewEventButton';

class NewEvent extends PureComponent {
    render() {
        const avatar = this.props.avatar !== undefined ? this.props.avatar : unknownPng;
        return (
            <div style={{ position: 'relative', height: '100%' }}>
                <Row>
                    <Col>
                        <img src={avatar} style={{ width: 'inherit' }}/>
                    </Col>
                </Row>
                {this.props.children}
                <div style={{ padding: '16px' }}>
                    <NewEventButton first={'ПРИНЯТЬ УЧАСТИЕ'} second={'ПОДРОБНЕЕ'}/>
                </div>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
NewEvent = withTheme(NewEvent);
export default connect(null, null)(NewEvent);
