import React, {PureComponent} from 'react';
import {withTheme} from 'react-fela';
import {connect} from 'react-redux';
import {Col, Row} from 'react-grid-system';
import checked from '../../assets/ic_radio_button_checked_24px.svg';
import unchecked from '../../assets/radio_button_unchecked_24px.svg';


class Role extends PureComponent {
    constructor(props) {
        super(props);
        this.handleParticipate = this.handleParticipate.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.state = {
            participate: true,
            create: false
        };
    }

    handleParticipate(){
        this.setState({
            participate: true,
            create: false,
        });
    }
    handleCreate(){
        this.setState({
            participate: false,
            create: true,
        });
    }
    render() {
        const participant = this.state.participate? checked : unchecked;
        const creator = this.state.create? checked : unchecked;
        return (
            <Col md={7}>
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={1} >
                                <img src={participant} onClick={this.handleParticipate} style={this.props.theme.clickElement} />
                            </Col>
                            <Col>
                                <span onClick={this.handleParticipate} style={this.props.theme.clickElement} >Учавствовать в проекте</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
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

export default connect(null, null)(Role);
