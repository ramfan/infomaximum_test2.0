import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';

class CommandSwitches extends PureComponent {
    render() {
        const {
            activeColumn, activeSpan,
        } = this.props.theme.authForm;
        return (
            <Col md={12} style={activeColumn}>
                <span style={activeSpan('0')}>СРЕДНЕЕ КОЛИЧЕСТВО УЧАСТНИКОВ</span>
            </Col>
        );
    }
}

export default withTheme(CommandSwitches);
