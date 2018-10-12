import email from '../../assets/email_auth.svg';
import password from '../../assets/password_auth.svg';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {validate} from '../../utils/validation';
import {renderField} from '../../containers/Auth/FormField';
import {Col, Row} from 'react-grid-system';
import {connect} from 'react-redux';
import {withTheme} from 'react-fela';

const AuthForm = props => {
    const { handleSubmit, pristine, reset, submitting, describe } = props;
    return (
        <Row>
            <Col md={12} style={{padding: ' 0 30px 30px 30px'}}>
                <Row>
                    <Col md={12}>
                        <Field name="email" type="email" component={renderField} label="Электронная почта" icon={email}/>
                        <Field name="password" type="password" component={renderField} label="Пароль" icon={password}/>
                    </Col>
                </Row>
                <Row justify={'between'} style={{marginTop: '3%'}}>
                    <Col md={3}/>
                    <Col md={6}>
                        <span style={props.theme.authForm.renderFieldButton}>{describe}</span>
                    </Col>
                    <Col md={3}/>
                </Row>
            </Col>
        </Row>
    );
};


export default reduxForm({
    form: 'AuthForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(withTheme(AuthForm));