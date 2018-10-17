/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import EventImage from '../../assets/EventImage.png';

class Event extends PureComponent {
    render() {
        const {
            root, description, title, subscribe, iconSection, eventIcon,
        } = this.props.theme.event;
        return (
            <Row style={root}>
                <Col md={12} >
                    <Row>
                        <Col>
                            <span style={description}>ВАШЕ СОБЫТИЕ</span>
                        </Col>
                    </Row>
                    <Row justify={'between'}>
                        <Col md={11}>
                            <span style={title}>Осенний хакатон HACKSARANSK 2018</span><br/>
                            <span style={subscribe}>48 часов беспрерывного кода, крутые менторы, эксперты ведущих компаний города, комфортные условия и отличная компания!</span>
                        </Col>
                        <Col md={1} style={iconSection}>
                            <img src={EventImage} style={eventIcon}/>
                        </Col>
                    </Row>
                    <Row justify={'start'}>
                        <Col md={2}>
                            <span style={this.props.theme.authForm.renderFieldButton}>ПОДРОБНЕЕ</span>
                        </Col>
                        <Col md={2}>
                            <span style={this.props.theme.authForm.renderFieldButton}>РЕДАКТИРОВАТЬ</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Event);
