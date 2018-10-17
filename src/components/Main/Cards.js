import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Card from './Card';
import connectIcon from '../../assets/landing-second-icon-Connect.svg';
import createIcon from '../../assets/landing-second-icon-Create.svg';
import regIcon from '../../assets/landing-second-icon-Reg.svg';

class Cards extends PureComponent {
    render() {
        return (
            <Row style={this.props.cards}>
                <Col>
                    <Card
                        icon={regIcon}
                        title={'Подключение виджетов'}
                        detail={'Стилизуйте виджеты под дизайн своего сайта. Добавьте их на свою площадку и можно запускать рекламу события!'}
                    />
                </Col>
                <Col>
                    <Card
                        icon={createIcon}
                        title={'Создание мероприятия'}
                        detail={'Вы сможете добавить логотип мероприятия, описание, поставить даты и внести другую важную для вас информацию'}
                    />
                </Col>
                <Col>
                    <Card
                        icon={connectIcon}
                        title={'Регистрация в сервисе'}
                        detail={'Это займет не более 10 минут и позволит вам быть уверенными, что никто другой не сможет помешать.'}
                    />
                </Col>
            </Row>
        );
    }
}

export default withTheme(Cards);
