/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';

class VacancyTitle extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.dashBoardParticipant.VacancyTitle.rootStyle}>
                <Col style={this.props.theme.paddingNull}>
                    <span>
                        <span style={this.props.theme.dashBoardParticipant.VacancyTitle.span}>{this.props.title}</span>
                    </span>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
VacancyTitle = withTheme(VacancyTitle);
export default connect(null, null)(VacancyTitle);
