/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../Auth/FormField';
import shape from '../../assets/Shape.svg';
import { validate } from '../../utils/validation';
import { actionCreators } from '../../duckStore';
import TextFields from '../../components/Forms/TextFields';
import CreateButton from '../../components/CreateButton';


class CommandForm extends PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addParticipant();
    }

    render() {
        const ParticipantsField = [];
        for (let i = 0; i < Number(this.props.countFields); i += 1) {
            ParticipantsField.push(

                <Col key={i} md={8}>
                    <Field name={`participant${i}`} type='text' component={renderField} label='Фамилия и имя участника'/>
                </Col>,
            );
        }
        /* TODO  разбить на мелкие компоненты */
        return (
            <Row>
                <Col>
                    <TextFields name={'commandName'} type={'text'} label={'Введите название команды'}/>
                </Col>
                <Col md={12}>
                    <TextFields name={'avatarURL'} type={'text'} label={'URL аватара команды'}/>
                    <Row align={'center'}>
                        {ParticipantsField}
                        <Col md={3} style={this.props.theme.CommandForm}>
                            <span style={this.props.theme.clickElement} onClick={this.handleClick }><img src={shape} /></span>
                            <span style={this.props.theme.clickElement} onClick={this.handleClick }> &nbsp; ДОБАВТЬ УЧАСТНИКА</span>
                        </Col>
                    </Row>
                    <TextFields name={'project'} type={'text'} label={'Текущий проект'}/>
                    <TextFields name={'vacancy'} type={'text'} label={'Кто нужен в команду'}/>
                    <TextFields name={'connectInformation'} type={'text'} label={'Контактная информация для связи'}/>
                    <CreateButton to_path={'/dashParticipant'}/>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
CommandForm = withTheme(CommandForm);
const { addParticipant } = actionCreators;
// eslint-disable-next-line no-class-assign
CommandForm = connect(state => ({
    countFields: state.duckReducer.countParticipants,
}), { addParticipant })(CommandForm);
export default reduxForm({
    form: 'EventForm', // a unique identifier for this form
    validate,
})(CommandForm);
