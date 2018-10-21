/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';


class ProfileEventDiscription extends PureComponent {
    render() {
        const { rootStyle, description } = this.props.theme.dashBoardSystem.ProfileEventDescription;
        return (
            <Row style={rootStyle}>
                <Col>
                    <span style={description}>

                                    48 часов беспрерывного кода, крутые менторы, эксперты ведущих компаний города, комфортные условия и отличная компания!
                    </span>
                </Col>
            </Row>
        );
    }
}

export default withTheme(ProfileEventDiscription);
