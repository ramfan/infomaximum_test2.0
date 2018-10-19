import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withTheme } from 'react-fela';
import { Row, Col } from 'react-grid-system';
import { Link, Route } from 'react-router-dom';
import { validate } from '../../utils/validation';
import { renderField } from '../Auth/FormField';
import shape from '../../assets/Shape.svg';

class EventForm extends PureComponent {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Field name='text1' type='text' component={renderField} label='Введите название события'/>
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
                    <Row>
                        <Col md={12}>
                            <Field name='text6' type='text' component={renderField} label='Место проведения'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Field name='text7' type='text' component={renderField} label='URL события аватара'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Field name='text8' type='text' component={renderField} label='Описание события'/>
                        </Col>
                    </Row>
                    <Row align={'center'}>
                        <Col md={8}>
                            <Field name='text9' type='text' component={renderField} label='Ссылка на соц. сеть'/>
                        </Col>
                        <Col md={3} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
                            <span style={{ cursor: 'pointer' }}><img src={shape} /></span>
                            <span style={{ cursor: 'pointer' }}> &nbsp; ДОБАВИТЬ СОЦ. СЕТЬ</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Field name='text10' type='text' component={renderField} label='Призы'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Field name='text11' type='text' component={renderField} label='Теги для поиска'/>
                        </Col>
                    </Row>
                    <Row align={'center'}>
                        <Col md={8}>
                            <Field name='text12' type='text' component={renderField} label='ФИО ментора / эксперта'/>
                        </Col>
                        <Col md={4} style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
                            <span style={{ cursor: 'pointer' }}><img src={shape} /></span>
                            <span style={{ cursor: 'pointer' }}> &nbsp; ДОБАВИТЬ МЕНТОРА / ЭКСПЕРТА</span>
                        </Col>
                    </Row>
                    <Row justify={'end'} style={{ marginTop: '2%' }}>
                        <Col md={2}>
                            <span style={{
                                letterSpacing: '0.75px',
                                fontSize: '14px',
                                color: '#EE0C28',
                            }}>ОТМЕНА</span>
                        </Col>
                        <Col md={2}>
                            <Route>
                                <Link to={'/event/profile/detail'} style={{ textDecoration: 'none' }}>
                                    <span style={{
                                        fontSize: '14px',
                                        letterSpacing: '0.75px',
                                        background: '#EE0C28',
                                        color: 'white',
                                        padding: '10px 30px 12px 30px',
                                        borderRadius: '4px',
                                    }}>СОЗДАТЬ</span>
                                </Link>
                            </Route>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
EventForm = withTheme(EventForm);

export default reduxForm({
    form: 'EventForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(EventForm);
