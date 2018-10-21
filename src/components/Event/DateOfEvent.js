import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Insriptions from '../Insriptions';
import Descriptions from '../Descriptions';

class DateOfEvent extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.dashBoardSystem.DateOfEvent}>
                <Col md={3}>
                    <Insriptions inscription={'Дата начала'}/>
                    <Descriptions description={'3 сентября 2018 года'}/>
                </Col>
                <Col md={3}>
                    <Insriptions inscription={'Время начала'}/>
                    <Descriptions description={'18:00'}/>
                </Col>
                <Col md={3}>
                    <Insriptions inscription={'Дата окончания'}/>
                    <Descriptions description={'5 сентября 2018 года'}/>
                </Col>
                <Col md={3}>
                    <Insriptions inscription={'Время окончания'}/>
                    <Descriptions description={'20:00'}/>
                </Col>
            </Row>
        );
    }
}

export default withTheme(DateOfEvent);
