/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';

class TextDescription extends PureComponent {
    render() {
        return (
            <div>
                <Col md={12}>
                    <span style={{ fontSize: this.props.descriptionFontSize }}>{this.props.description}</span>
                </Col>
                <Col md={12}>
                    <span style={{ fontSize: this.props.subscriptionFontSize }}>{this.props.subscription}</span>
                </Col>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
TextDescription = withTheme(TextDescription);
export default connect(null, null)(TextDescription);
