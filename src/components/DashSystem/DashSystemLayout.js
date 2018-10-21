import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Event from './Event';
import EventCard from './EventCard';
import ParticipantSwitches from './ParticipantSwitches';
import CommandSwitches from './CommandSwitches';
import ProjectSwitches from './ProjectSwitches';
import diagramm from '../../assets/Overlay.svg';
import Stats from './Stats';
import Thematics from './Thematics';

class DashSystemLayout extends PureComponent {
    render() {
        const { rootStyle, row, rowCard } = this.props.theme.dashBoardSystem.DashBoardSystemLayout;
        return (
            <Col md={11} style={ rootStyle }>
                <Row style={ row }>
                    <Col md={12} style={this.props.theme.paddingNull}>
                        <Event/>
                    </Col>
                </Row>
                <Row justify={'between'} style={rowCard}>
                    <EventCard
                        title={'Участники'}
                        subTitle={'за последние 30 дней'}
                        num={'125'}
                        word={'человек'}
                        switcheses={<ParticipantSwitches/>}
                        detailInfo={<Stats icon={diagramm} prop={['Мужчины (35%)', 'Женщины (35%)', 'Другое (39%)']}/>}
                    />
                    <EventCard
                        title={'Команды'}
                        subTitle={'за последние 30 дней'}
                        num={'21'}
                        switcheses={<CommandSwitches/>}
                        detailInfo={<Stats icon={diagramm} prop={['2-3 человека (35%)', '3-5 человек (35%)', 'Другое (30%)']}/>}
                    />
                    <EventCard
                        title={'Проекты'}
                        subTitle={'за последние 30 дней'}
                        num={'6'}
                        switcheses={<ProjectSwitches/>}
                        detailInfo={<Thematics thematics={['Мобильное приложение (3)', 'Роботехника (2)', 'VR (1)']}/>}
                    />
                </Row>
            </Col>
        );
    }
}

export default withTheme(DashSystemLayout);
