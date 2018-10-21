/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withTheme } from 'react-fela';
import { Row, Col } from 'react-grid-system';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { validate } from '../../utils/validation';
import { renderField } from '../Auth/FormField';
import shape from '../../assets/Shape.svg';
import CreateButton from '../../components/CreateButton';
import TextFields from '../../components/Forms/TextFields';
import { actionCreators } from '../../duckStore';

class EventForm extends PureComponent {
    constructor(props) {
        super(props);
        this.handleAddNewSocialField = this.handleAddNewSocialField.bind(this);
        this.handleAddNewMentorField = this.handleAddNewMentorField.bind(this);
    }

    handleAddNewSocialField() {
        this.props.addSocial();
    }

    handleAddNewMentorField() {
        this.props.addMentor();
    }

    render() {
        /* TODO  разбить на мелкие компоненты */
        const fieldsSocial = [];
        for (let i = 0; i < this.props.countFieldsSocial; i += 1) {
            fieldsSocial.push(
                <Col md={8}>
                    <Field name={`social${i}`} type='text' component={renderField} label='Ссылка на соц. сеть'/>
                </Col>,
            );
        }
        const mentors = [];
        for (let i = 0; i < this.props.countFieldsMentor; i += 1) {
            mentors.push(
                <Col md={8}>
                    <Field name={`mentor${i}`} type='text' component={renderField} label='ФИО ментора / эксперта'/>
                </Col>,
            );
        }
        return (
            <Row>
                <Col>
                    <TextFields name={'eventName'} type={'text'} label={'Введите название события'}/>
                </Col>
                <Col md={12}>
                    <Row justify={'start'}>
                        <Col md={2}>
                            <Field name='text2' type='date' component={renderField} label=''/>
                        </Col>
                        <Col md={2}>
                            <Field name='text3' type='time' component={renderField} label=''/>
                        </Col>
                        <Col md={2}>
                            <Field name='text4' type='date' component={renderField} label=''/>
                        </Col>
                        <Col md={2}>
                            <Field name='text5' type='time' component={renderField} label=''/>
                        </Col>
                    </Row>
                    <TextFields name={'placeEvent'} type={'text'} label={'Место проведения события'}/>
                    <TextFields name={'avatarURL'} type={'text'} label={'URL аватара события'}/>
                    <TextFields name={'descriptionEvent'} type={'text'} label={'Описание события'}/>
                    <Row align={'center'}>
                        {fieldsSocial}
                        <Col md={3} style={this.props.theme.EventForm.col}>
                            <span style={this.props.theme.clickElement} onClick={this.handleAddNewSocialField}><img src={shape} /></span>
                            <span style={this.props.theme.clickElement} onClick={this.handleAddNewSocialField}> &nbsp; ДОБАВИТЬ СОЦ. СЕТЬ</span>
                        </Col>
                    </Row>
                    <TextFields name={'prise'} type={'text'} label={'Призы'}/>
                    <Row align={'center'}>
                        {mentors}
                        <Col md={4} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
                            <span style={this.props.theme.clickElement} onClick={this.handleAddNewMentorField}><img src={shape} /></span>
                            <span style={this.props.theme.clickElement} onClick={this.handleAddNewMentorField}> &nbsp; ДОБАВИТЬ МЕНТОРА / ЭКСПЕРТА</span>
                        </Col>
                    </Row>
                    <CreateButton to_path={'/event/profile/detail'}/>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
EventForm = withTheme(EventForm);
const { addSocial, addMentor } = actionCreators;

// eslint-disable-next-line no-class-assign
EventForm = connect(state => ({
    countFieldsSocial: state.duckReducer.countSocials,
    countFieldsMentor: state.duckReducer.countMentors,

}), { addSocial, addMentor })(EventForm);

export default reduxForm({
    form: 'EventForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(EventForm);
