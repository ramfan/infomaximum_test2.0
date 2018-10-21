import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Button from '../Button';

class NewEventButton extends PureComponent {
    render() {
        return (
            <Row justify={'between'} style={{
                position: 'absolute', bottom: 0, width: '100%', marginBottom: '3%',
            }}>
                <Col style={{ margin: 0, padding: 0 }}>
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
