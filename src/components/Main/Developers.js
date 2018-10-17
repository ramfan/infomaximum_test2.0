import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import DeveloperCard from './DeveloperCard';
import maskaev from '../../assets/Mask Group.png';
import gLow from '../../assets/g_low.png';
import ketchupvk from '../../assets/ketchupvk.png';
import pakus from '../../assets/pakus.png';

class Developers extends PureComponent {
    render() {
        return (
            <Row justify={'between'}>
                <Col md={3}>
                    <DeveloperCard avatar={maskaev} name={'Дмитрий Маскаев'} roleInProject={'Программист'} social={'vk.com/maskaevda'}/>
                </Col>
                <Col md={3}>
                    <DeveloperCard avatar={gLow} name={'Николай Чигажов'} roleInProject={'Программист'} social={'vk.com/g_low'}/>
                </Col>
                <Col md={3}>
                    <DeveloperCard avatar={ketchupvk} name={'Виктор Пименов'} roleInProject={'Программист'} social={'vk.com/ketchupvk'}/>
                </Col>
                <Col md={3}>
                    <DeveloperCard avatar={pakus} name={'Паша Солодовников'} roleInProject={'Дизайнер'} social={'vk.com/pakus'}/>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Developers);
