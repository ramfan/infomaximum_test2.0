/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import RowDescription from './RowDescription';
import TextDescription from './TextDescription';
import AdditionalDescription from './AdditionalDescription';

class ProjectVacancy extends PureComponent {
    render() {
        const names = ['Иванов', 'Петров', 'Сидоров', 'Васильев'];
        const participants = [];
        for (let i = 0; i < names.length; i += 1) {
            participants.push(
                <div key={i} style={this.props.theme.dashBoardParticipant.projectVacancy.wrap}>
                    <span style={this.props.theme.dashBoardParticipant.projectVacancy}>{names[i]}</span>
                </div>,
            );
        }
        return (
            <div >
                <RowDescription children={<TextDescription descriptionFontSize={'24px'} subscriptionFontSize={'12px'} description={'Сервис «Уточка»'} subscription={'Проект команды «Интерстеллар«'}/>}/>
                <RowDescription children={<AdditionalDescription text={'Описание'} subscription={'Сервис по поиску домиков уточек у богатых людей'} />}/>
                <RowDescription children={<AdditionalDescription text={'Участники'} subscription={participants} />}/>

            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
ProjectVacancy = withTheme(ProjectVacancy);
export default connect(null, null)(ProjectVacancy);
