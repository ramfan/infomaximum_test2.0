/* eslint-disable no-dupe-keys */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import YourCard from '../DashParticipant/YourCard';
import username from '../../assets/username.png';
import team from '../../assets/team.png';
import ourProject from '../../assets/ourProject.svg';
import hackathon from '../../assets/Hackathon.png';
import calendar from '../../assets/date.svg';
import Subscriptions from '../Subscriptions';
import Button from '../Button';
import unknown from '../../assets/unkown.png';
import unknownPng from '../../assets/unknownPNG.png';
import NewEvent from '../DashParticipant/NewEvent';
import CommandVacancy from '../DashParticipant/CommandVacancy';
import NearestEvent from '../DashParticipant/NearestEvent';
import ProjectVacancy from '../DashParticipant/ProjectVacancy';

class Participant extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.systemLayout}>
                <Col md={12} >
                    <Row style={{ margin: '1%', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px' }}>
                        <YourCard
                            title={'ВАШ ПРОФИЛЬ'}
                            name={'Username Петрович'}
                            additional={'Основные навыки:  UX дизайн, CRM системы, создание логотипов'}
                            icon={username}/>
                    </Row>
                    <Row style={{ margin: '1%', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px' }}>
                        <YourCard
                            title={'ВАША КОМАНДА'}
                            name={'Боевые чебурашки'}
                            additional={'Иванов Сргей, Петров Петр, Сергеев Сергей'}
                            icon={team}/>
                    </Row>
                    <Row style={{ margin: '1%', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px' }}>
                        <YourCard
                            title={'ВАШ ПРОЕКТ'}
                            name={'Сервис AdminEventDay '}
                            additional={'Иванов Сргей, Петров Петр, Сергеев Сергей'}
                            icon={ourProject}/>
                    </Row>

                    <Row justify={'between'} style={{ margin: '1%' }}>

                        <div style={{ width: '33%', background: 'white', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px' }}>

                            <NewEvent
                                avatar={hackathon}
                                children={<NearestEvent/>}
                            />

                        </div>

                        <div style={{ width: '33%', position: 'relative', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px' }}>
                            <Row style={{
                                margin: ' 0% 0 0% 0%', background: 'white', top: 0, height: '49%', position: 'absolute',
                            }}>
                                <CommandVacancy/>
                            </Row>

                            <Row style={{
                                margin: ' 0% 0 0% 0%', background: 'white', bottom: 0, height: '49%', position: 'absolute',
                            }}>
                                <CommandVacancy/>
                            </Row>

                        </div>
                        <div style={{
                            width: '33%', background: 'white', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px', overflow: 'hidden',
                        }}>
                            <NewEvent
                                children={<ProjectVacancy/>}
                            />
                        </div>
                    </Row>
                </Col>

            </Row>
        );
    }
}

export default withTheme(Participant);
