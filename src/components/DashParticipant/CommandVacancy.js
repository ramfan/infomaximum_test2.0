import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Subscriptions from '../Subscriptions';
import unknown from '../../assets/unkown.png';
import Button from '../Button';
import NewEventButton from './NewEventButton';
import VacancyTitle from './VacancyTitle';
import VacancyDescription from './VacancyDescription';

class CommandVacancy extends PureComponent {
    render() {
        const avatar = this.props.avatar !== undefined ? this.props.avatar : unknown;
        return (
            <div >
                <Col style={{ position: 'relative', height: '100%' }}>
                    <Row align={'start'}>
                        <Col md={8}>
                            <VacancyTitle title={'ИЩУТ СПЕЦИАЛИСТА'}/>
                            <VacancyDescription header={'Команда 1'} description={'Мы хотим создать сервис по записи домашних животных на стрижку'}/>
                        </Col>
                        <Col md={4} style={{ padding: '10px' }}>
                            <img src={avatar} style={{ width: 'inherit' }}/>
                        </Col>
                    </Row>
                    <NewEventButton first={'ПРИСОЕДЕНИТЬСЯ'} second={'ПОДРОБНЕЕ'}/>
                </Col>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
CommandVacancy = withTheme(CommandVacancy);
export default connect(null, null)(CommandVacancy);
