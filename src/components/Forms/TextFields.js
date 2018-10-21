/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { renderField } from '../../containers/Auth/FormField';

class TextFields extends PureComponent {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Field name={this.props.name} type={this.props.type} component={renderField} label={this.props.label}/>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
TextFields = withTheme(TextFields);
export default connect(null, null)(TextFields);
