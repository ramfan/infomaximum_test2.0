import React, {PureComponent} from 'react';
import {Col, Row} from 'react-grid-system';
import { withTheme} from 'react-fela';
import {actionCreators} from '../../duckStore/index';
import {connect} from 'react-redux';
import AuthForm from '../../components/Forms/AuthForm';
import SocialAuth from '../../components/Auth/SocialAuth';
import HeaderAuth from './HeaderAuth';
import Role from './Role';


class Auth extends PureComponent {
    constructor(props){
        super(props);
        this.toggleHide = this.toggleHide.bind(this);
    }
    toggleHide(){
        this.props.showPopup(false);
    }
    render() {
        const { rootStyle, upperHelpRow, lowerHelpRow, baseColumn, formColumn } = this.props.theme.authForm;
        return (
            <Row style={ rootStyle }>
                <Row onClick={this.toggleHide} style={upperHelpRow}></Row>
                <Col md={4} onClick={this.toggleHide} style={this.props.theme.paddingNull}></Col>
                <Col style={baseColumn}>
                    <Row >
                        {
                            this.props.getRegisterForm?
                                <Col md={12} style={formColumn} >
                                    <HeaderAuth />
                                    <Role/>
                                    <SocialAuth headerBlock={'Регистрация через соц. сети'}/>
                                    <AuthForm describe={'ЗАРЕГИСТРИРОВАТЬСЯ'}/>
                                </Col>
                                :
                                <Col md={12} style={formColumn} >

                                    <HeaderAuth />
                                    <SocialAuth headerBlock={'Вход через соц. сети'}/>
                                    <AuthForm describe={'ВОЙТИ'}/>
                                </Col>
                        }
                    </Row>
                </Col>
                <Col md={4} onClick={this.toggleHide} style={ this.props.paddingNull }></Col>
                <Row onClick={this.toggleHide} style={lowerHelpRow}></Row>
            </Row>
        );
    }
}
const {showPopup} = actionCreators;
// eslint-disable-next-line no-class-assign
Auth = withTheme(Auth);
export default connect(state => ({
    getRegisterForm: state.duckReducer.getRegisterForm
}), {showPopup})(Auth);
