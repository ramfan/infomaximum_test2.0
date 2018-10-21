import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Subscriptions from '../Subscriptions';

class VacancyDescription extends PureComponent {
    render() {
        return (
            <div style={this.props.theme.dashBoardParticipant.VacancyDescription.rootStyle}>
                <Row style={this.props.theme.dashBoardParticipant.VacancyDescription.row}>
                    <Col style={this.props.theme.paddingNull}>
                        <span style={{ fontSize: '24px' }}>{this.props.header}</span>
                    </Col>
                </Row>
                <Row style={this.props.theme.dashBoardParticipant.VacancyDescription.row}>
                    <Col style={this.props.theme.paddingNull}>
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
