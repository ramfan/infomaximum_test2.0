import React, { PureComponent } from 'react';
import { Col } from 'react-grid-system';
import ivan from '../../assets/ivan.png';
import sergey from '../../assets/sidr.png';
import petr from '../../assets/petr.png';
import EventParticipant from './EventParticipant';


class ParticipantsEvent extends PureComponent {
    render() {
        /* Если вы это видите, извините, я не успел */
        return (
            <Col md={4}>
                <EventParticipant num={'1.'} avatar={ivan} name={'Иванов Иван'} role={'Программист'}/>
                <EventParticipant num={'2.'} avatar={petr} name={'Петр Петров'} role={'Программист'}/>
                <EventParticipant num={'3.'} avatar={sergey} name={'Сергеев Сергей'} role={'Дизайнер'}/>
            </Col>

        );
    }
}

export default ParticipantsEvent;
