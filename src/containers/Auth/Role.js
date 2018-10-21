/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Col, Row } from 'react-grid-system';
import checked from '../../assets/ic_radio_button_checked_24px.svg';
import unchecked from '../../assets/radio_button_unchecked_24px.svg';
import { actionCreators } from '../../duckStore';


class Role extends PureComponent {
    constructor(props) {
        super(props);
        this.handleParticipate = this.handleParticipate.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleParticipate() {
        this.props.asParticipant();
    }

    handleCreate() {
        this.props.asCreator();
    }

    render() {
        const participant = !this.props.isCreator ? checked : unchecked;
        const creator = this.props.isCreator ? checked : unchecked;
        return (
            <Col md={7} style={this.props.theme.AuthForm.role}>
                <Row >
                    <Col md={12} style={this.props.theme.AuthForm.role}>
                        <Row>
                            <Col md={1} >
                                <img src={participant} onClick={this.handleParticipate} style={this.props.theme.clickElement} />
                            </Col>
                            <Col>
                                <span onClick={this.handleParticipate} style={this.props.theme.clickElement} >Учавствовать в проекте</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} style={this.props.theme.AuthForm.role}>
                        <Row>
                            <Col md={1} >
                                <img src={creator} onClick={this.handleCreate} style={this.props.theme.clickElement} />
                            </Col>
                            <Col >
                                <span onClick={this.handleCreate} style={this.props.theme.clickElement} >Создать проект</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}
// eslint-disable-next-line no-class-assign
Role = withTheme(Role);
const { asCreator, asParticipant } = actionCreators;
export default connect(state => ({
    isCreator: state.duckReducer.isCreator,
}), { asCreator, asParticipant })(Role);
