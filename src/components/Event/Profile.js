/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { Route, Switch } from 'react-router';
import { withTheme } from 'react-fela';
import Logo from '../../assets/Rectangle 2.png';
import ProfileSwitches from './ProfileSwitches';
import Detail from './Detail';
import ParticipantsEvent from './ParticipantsEvent';
import ProfileEventTitle from './ProfileEventTitle';
import ProfileEventEdit from './ProfileEventEdit';
import ProfileEventDiscription from './ProfileEventDiscription';
import DateOfEvent from './DateOfEvent';
import Insriptions from '../Insriptions';
import Descriptions from '../Descriptions';
import EventPlace from './EventPlace';

class Profile extends PureComponent {
    render() {
        const { rootStyle, eventInfo, logo } = this.props.theme.dashBoardSystem.Profile;
        return (
            <Col md={12} style={rootStyle}>
                <Row style={eventInfo}>
                    <Col md={10}>
                        <ProfileEventTitle/>
                        <ProfileEventEdit/>
                        <ProfileEventDiscription/>
                        <DateOfEvent/>
                        <EventPlace/>
                    </Col>
                    <Col md={2}>
                        <img src={Logo} style={logo}/>
                    </Col>
                </Row>
                <Row>
                    <ProfileSwitches/>
                </Row>
                <Row>
                    <Switch>
                        <Route path={'/event/profile/detail'} component={Detail}/>
                        <Route path={'/event/profile/participant'} component={ParticipantsEvent}/>
                    </Switch>
                </Row>
            </Col>
        );
    }
}

export default withTheme(Profile);
