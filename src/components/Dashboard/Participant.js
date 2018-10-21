/* eslint-disable no-dupe-keys,max-len */
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
                    <Row style={this.props.theme.dashBoardParticipant.ParticipantProfile.profile}>
                        <YourCard
                            title={'ВАШ ПРОФИЛЬ'}
                            name={'Username Петрович'}
                            additional={'Основные навыки:  UX дизайн, CRM системы, создание логотипов'}
                            icon={username}/>
                    </Row>
                    <Row style={this.props.theme.dashBoardParticipant.ParticipantProfile.profile}>
                        <YourCard
                            title={'ВАША КОМАНДА'}
                            name={'Боевые чебурашки'}
                            additional={'Иванов Сргей, Петров Петр, Сергеев Сергей'}
                            icon={team}/>
                    </Row>
                    <Row style={this.props.theme.dashBoardParticipant.ParticipantProfile.profile}>
                        <YourCard
                            title={'ВАШ ПРОЕКТ'}
                            name={'Сервис AdminEventDay '}
                            additional={'Иванов Сргей, Петров Петр, Сергеев Сергей'}
                            icon={ourProject}/>
                    </Row>

                    <Row justify={'between'} style={this.props.theme.dashBoardParticipant.EventsRow}>

                        <div style={this.props.theme.dashBoardParticipant.EventsColumns}>

                            <NewEvent
                                avatar={hackathon}
                                children={<NearestEvent/>}
                            />

                        </div>

                        <div style={this.props.theme.dashBoardParticipant.EventsColumns.second}>
                            <Row style={this.props.theme.dashBoardParticipant.MiddleColumn.TopColumn}>
                                <CommandVacancy/>
                            </Row>

                            <Row style={this.props.theme.dashBoardParticipant.MiddleColumn.BottomColumn}>
                                <CommandVacancy/>
                            </Row>

                        </div>
                        <div style={
                            this.props.theme.dashBoardParticipant.EventsColumns
                        }>
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
