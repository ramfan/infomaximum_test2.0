/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Button from '../Button';

class NewEventButton extends PureComponent {
    render() {
        return (
            <Row justify={'between'} style={this.props.theme.dashBoardParticipant.NewEventButton}>
                <Col style={Object.assign(this.props.theme.marginNull, this.props.theme.marginNull)}>
                    <Button description={this.props.first} color={'#6202EE'}/>
                </Col>
                <Col >
                    <Button description={this.props.second} color={'#6202EE'}/>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
NewEventButton = withTheme(NewEventButton);
export default connect(null, null)(NewEventButton);
