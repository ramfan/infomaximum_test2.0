/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import unknownPng from '../../assets/unknownPNG.png';

import NewEventButton from './NewEventButton';

class NewEvent extends PureComponent {
    render() {
        const avatar = this.props.avatar !== undefined ? this.props.avatar : unknownPng;
        return (
            <div style={this.props.theme.dashBoardParticipant.NewEvent.rootStyle}>
                <Row>
                    <Col>
                        <img src={avatar} style={this.props.theme.dashBoardParticipant.NewEvent.avatar}/>
                    </Col>
                </Row>
                {this.props.children}
                <div style={this.props.theme.dashBoardParticipant.NewEvent.buttonBlock}>
                    <NewEventButton first={'ПРИНЯТЬ УЧАСТИЕ'} second={'ПОДРОБНЕЕ'}/>
                </div>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
NewEvent = withTheme(NewEvent);
export default connect(null, null)(NewEvent);
