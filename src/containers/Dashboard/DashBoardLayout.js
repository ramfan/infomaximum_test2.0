import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import System from '../../components/Dashboard/System';
import Nav from '../../components/Navigate/Nav';
import CreateEvent from '../../components/Event/CreateEvent';

class DashBoardLayout extends PureComponent {
    render() {
        let content = {};
        if (!this.props.createEvent) {
            content = <System/>;
        } else {
            content = <CreateEvent/>;
        }
        return (
            <Row style={{ marginRight: 0 }}>
                <Col md={12} style={this.props.theme.paddingNull}>
                    <Layout
                        left={<Nav/>}
                        right={content}
                    />
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
DashBoardLayout = withTheme(DashBoardLayout);

export default connect(state => ({
    createEvent: state.duckReducer.createEvent,
}
))(DashBoardLayout);
