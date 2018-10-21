import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Insriptions from '../Insriptions';
import Descriptions from '../Descriptions';


class EventPlace extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.dashBoardSystem.EventPlace}>
                <Col md={12}>
                    <Insriptions inscription={'Место проведения события'}/>
                    <Descriptions description={'Саранск, Россия, ул. Псковская, 2А'}/>
                </Col>
            </Row>
        );
    }
}

export default withTheme(EventPlace);
