/* eslint-disable no-class-assign */
import React, {PureComponent} from 'react';
import {Row, Col} from 'react-grid-system';
import {withTheme} from 'react-fela';
import {CustomButton, CustomSpans} from '../../utils/CustomElements';
import logoIcon from '../../assets/logo.svg';
import MenuItem from './MenuItem';
import {Link, Route} from 'react-router-dom';
import {actionCreators} from '../../duckStore';
import {connect} from 'react-redux';

class Left extends PureComponent {
    constructor(props){
        super(props);
        this.toggleShow = this.toggleShow.bind(this);
        this.state = {
            showPopup: false,
        };
    }
    toggleShow() {
        this.props.showPopup(true);
    }

    render() {
        const { rootStyle, logo, logo_color, info, buttonRow, buttonCol, customButton } = this.props.theme.LeftBlock.mainPage;
        return (
            <Row>
                <Col md={2} >
                    <Row>
                        <Col md={12} style={logo}>
                            <Row >
                                <Col md={2} style={logo}>
                                    <img src={logoIcon} alt=""/>
                                </Col>
                                <Col md={10} style={logo}>
                                    <CustomSpans style={logo_color}>AdminEventDay</CustomSpans>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row justify={'start'}>
                        <Col md={12}>
                            <CustomSpans style={info}>
                                Сервис по созданию и запуску IT-событий в кратчайшие сроки
                                и с минимальными затратами
                            </CustomSpans>
                        </Col>
                    </Row>
                    <Row style={buttonRow}>
                        <Col style={buttonCol}  onClick={this.toggleShow}>
                            <CustomButton style={customButton}>
                                Вход / Регистрация
                            </CustomButton>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={2} style={rootStyle}>
                            <MenuItem itemName={'Создать событие'} to_block={'create'}/>
                            <MenuItem itemName={'Как это работает?'} to_block={'cards'}/>
                            <MenuItem itemName={'Сколько стоит?'} to_block={'free'}/>
                            <MenuItem itemName={'Контакты'} to_block={'contacts'}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
const {showPopup} = actionCreators;
Left = withTheme(Left);
export default connect(null, {showPopup})(Left);
