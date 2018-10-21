/* eslint-disable max-len */
import React, { Component } from 'react';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Col, Row } from 'react-grid-system';
import checked from '../../assets/ic_radio_button_checked_24px.svg';
import unchecked from '../../assets/radio_button_unchecked_24px.svg';
import { actionCreators } from '../../duckStore';


class Role extends Component {
    constructor(props) {
        super(props);
        this.handleParticipate = this.handleParticipate.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.state = {
            creator: false,
        };
    }

    handleParticipate() {
        this.props.asCreator(false);
    }

    handleCreate() {
        this.props.asCreator(true);
    }

    render() {
        const participant = !this.props.isCreator ? checked : unchecked;
        const creator = this.props.isCreator ? checked : unchecked;
        return (
            <Col md={7} style={this.props.theme.AuthForm.role}>
                <Row >
                    <Col md={12} style={this.props.theme.AuthForm.role}>
                        <Row>
                            <Col md={1} nClick={this.handleParticipate}>
                                <img src={participant} o style={this.props.theme.clickElement} />
                            </Col>
                            <Col onClick={this.handleParticipate}>
                                <span style={this.props.theme.clickElement} >Учавствовать в проекте</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} style={this.props.theme.AuthForm.role}>
                        <Row>
                            <Col md={1} onClick={this.handleCreate}>
                                <img src={creator} style={this.props.theme.clickElement} />
                            </Col>
                            <Col onClick={this.handleCreate}>
                                <span style={this.props.theme.clickElement} >Создать проект</span>
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
const { asCreator } = actionCreators;
export default connect((state) => {
    console.log('creat', state.duckReducer.isCreator);
    return {
        isCreator: state.duckReducer.isCreator,
        isReady: state.duckReducer.isReady,
    };
}, { asCreator })(Role);
