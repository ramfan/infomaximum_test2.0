import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';

class RowDescription extends PureComponent {
    render() {
        return (
            <Row style={{ margin: 0, paddingBottom: '16px' }}>
                {this.props.children}
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
RowDescription = withTheme(RowDescription);
export default connect(null, null)(RowDescription);
