/* eslint-disable max-len */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row } from 'react-grid-system';
import { connect } from 'react-redux';
import { withTheme } from 'react-fela';
import { Link, Route } from 'react-router-dom';
import { validate } from '../../utils/validation';
import { renderField } from '../../containers/Auth/FormField';
import email from '../../assets/email_auth.svg';
import password from '../../assets/password_auth.svg';
import user from '../../assets/usernameReg.svg';

class AuthForm extends Component {
    render() {
        const {
            handleSubmit, pristine, reset, submitting, describe,
        } = this.props;
        const { rootStyle, button } = this.props.theme.AuthForm;
        const path = this.props.creator === false ? '/dashParticipant' : '/dashSys';
        return (
            <Row>
                <Col md={12} style={rootStyle}>
                    <Row>
                        <Col md={12}>
                            {this.props.username
                                ? <Field name='username' type='email' component={renderField} label='Фамилия и Имя' icon={user}/>
                                : null}
                            <Field name='email' type='email' component={renderField} label='Электронная почта' icon={email}/>
                            <Field name='password' type='password' component={renderField} label='Пароль' icon={password}/>
                        </Col>
                    </Row>
                    <Row justify={'between'} style={button}>
                        <Col md={3}/>
                        <Col md={6}>
                            <Route>
                                <Link to={path} style={this.props.theme.linkStyle}>
                                    <span style={this.props.theme.authForm.renderFieldButton()} onClick={this.handleAuth}>{describe}</span>
                                </Link>
                            </Route>
                        </Col>
                        <Col md={3}/>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    form: 'AuthForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(connect((state) => {
    console.log('sss', state.duckReducer.isCreator);
    return {
        isReg: state.duckReducer.getRegisterForm,
        creator: state.duckReducer.isCreator,
        isReady: state.duckReducer.isReady,
    };
})(withTheme(AuthForm)));