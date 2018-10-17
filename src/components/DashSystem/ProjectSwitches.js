import React, { PureComponent } from 'react';
import { Col } from 'react-grid-system';
import { withTheme } from 'react-fela';

class ProjectSwitches extends PureComponent {
    render() {
        const {
            activeColumn, activeSpan,
        } = this.props.theme.authForm;
        return (
            <Col md={12} style={activeColumn}>
                <span style={activeSpan('0')}>ТЕМАТИКИ</span>
            </Col>
        );
    }
}

export default withTheme(ProjectSwitches);
