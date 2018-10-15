import React, {PureComponent} from 'react';
import Layout from '../../components/Layout';
import {Row, Col} from 'react-grid-system';
import System from '../../components/Dashboard/System';
import {withTheme} from 'react-fela';
import Nav from '../../components/Navigate/Nav';

class DashBoardLayout extends PureComponent {

    render() {
        return (
            <Row style={{marginRight: 0}}>
                <Col md={12} style={this.props.theme.paddingNull}>
                    <Layout
                        left={<Nav/>}
                        right={<System/>}
                    />
                </Col>
            </Row>
        );
    }
}

export default withTheme(DashBoardLayout);
