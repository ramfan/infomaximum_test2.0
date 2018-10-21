/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';
import { Col } from 'react-grid-system';


class Button extends PureComponent {
    render() {
        const color = this.props.color !== undefined ? this.props.color : undefined;
        return (
            <Col md={12}>
                <span style={this.props.theme.authForm.renderFieldButton(color)}>{this.props.description}</span>
            </Col>
        );
    }
}

export default withTheme(Button);
