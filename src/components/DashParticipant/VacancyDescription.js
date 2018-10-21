import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Subscriptions from '../Subscriptions';

class VacancyDescription extends PureComponent {
    render() {
        return (
            <div style={{ paddingBottom: '86px' }}>
                <Row style={{ margin: 0, marginTop: '5%', padding: 0 }}>
                    <Col style={{ padding: 0 }}>
                        <span style={{ fontSize: '24px' }}>{this.props.header}</span>
                    </Col>
                </Row>
                <Row style={{ margin: 0, marginTop: '5%', padding: 0 }}>
                    <Col style={{ padding: 0 }}>
                        <Subscriptions subscription={this.props.description}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
VacancyDescription = withTheme(VacancyDescription);
export default connect(null, null)(VacancyDescription);
