import React, {PureComponent} from 'react';
import {Row, Col} from 'react-grid-system';
import { Link as ScrollIn} from 'react-scroll';
import {withTheme} from 'react-fela';
import {CustomButton, CustomSpans} from '../../utils/CustomElements';
import logoIcon from '../../assets/logo.svg';
class Left extends PureComponent {
    render() {
        const { rootStyle, item, logo, logo_color, info } = this.props.theme.LeftBlock.mainPage;
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
                    <Row style={{display: 'inline-block', lineHeight: '19px', marginLeft: '5%', marginBottom: '10%'}}>
                        <Col style={{
                            display: 'block',
                            background: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',
                            borderRadius: '13px',
                            padding: '2px',
                        }}>
                            <CustomButton style={{
                                width: 'max-content',
                                fontSize: 'smaller'
                            }}>
                                Вход/Регистрация
                            </CustomButton>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={2} style={rootStyle}>
                            <CustomSpans>
                                <ScrollIn style={item}  activeStyle="active" className="test1" to="create" spy={true} smooth={true} duration={500} >
                                    Создать событие
                                </ScrollIn>
                            </CustomSpans>
                            <br/>
                            <CustomSpans>
                                <ScrollIn style={item}  activeStyle="active" className="test1" to="cards" spy={true} smooth={true} duration={500} >
                                    Как работает?
                                </ScrollIn>
                            </CustomSpans>
                            <br/>
                            <CustomSpans>
                                <ScrollIn style={item}  activeStyle="active" className="test1" to="free" spy={true} smooth={true} duration={500} >
                                    Сколько стоит?
                                </ScrollIn>
                            </CustomSpans>
                            <br/>
                            <CustomSpans>
                                <ScrollIn style={item}  activeStyle="active" className="test1" to="contacts" spy={true} smooth={true} duration={500} >
                                    Контакты
                                </ScrollIn>
                            </CustomSpans>
                            <br/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Left);
