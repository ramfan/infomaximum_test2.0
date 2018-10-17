import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { actionCreators } from '../../duckStore';

class HeaderAuth extends PureComponent {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    handleRegister() {
        this.props.getRegister(true);
    }

    handleAuth() {
        this.props.getRegister(false);
    }

    render() {
        const {
            activeColumn, activeSpan, disActiveSpan, headerRow, disActiveColumn,
        } = this.props.theme.authForm;
        const { getRegisterForm } = this.props;

        const registerColumn = getRegisterForm ? activeColumn : disActiveColumn;
        const registerSpan = getRegisterForm ? activeSpan() : disActiveSpan();

        const authColumn = getRegisterForm ? disActiveColumn : activeColumn;
        const authSpan = getRegisterForm ? disActiveSpan() : activeSpan();
        return (
            <Row justify={'between'} style={headerRow}>
                <Col md={6} style={registerColumn}>
                    <span style={registerSpan} onClick={this.handleRegister}>
                        <strong>
                            РЕГИСТРАЦИЯ
                        </strong>
                    </span>
                </Col>
                <Col md={6} style={authColumn}>
                    <span style={authSpan} onClick={this.handleAuth}>
                        <strong>
                            ВХОД
                        </strong>
                    </span>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
HeaderAuth = withTheme(HeaderAuth);
const { getRegister } = actionCreators;
export default connect(state => ({
    getRegisterForm: state.duckReducer.getRegisterForm,
}), { getRegister })(HeaderAuth);
