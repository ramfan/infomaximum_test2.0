import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';

class VacancyTitle extends PureComponent {
    render() {
        return (
            <Row style={{ margin: 0, marginTop: '5%', padding: 0 }}>
                <Col style={{ padding: 0 }}>
                    <span>
                        <span style={{ fontSize: '10px', letterSpacing: '1.5px' }}>{this.props.title}</span>
                    </span>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
VacancyTitle = withTheme(VacancyTitle);
export default connect(null, null)(VacancyTitle);
