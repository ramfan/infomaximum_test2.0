/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';


class ProfileEventDiscription extends PureComponent {
    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <Row style={{ marginTop: '5%' }}>
                <Col>
                    <span style={{ fontSize: '13px', color: 'rgba(0, 0, 0, 0.54)' }}>

                                    48 часов беспрерывного кода, крутые менторы, эксперты ведущих компаний города, комфортные условия и отличная компания!
                    </span>
                </Col>
            </Row>
        );
    }
}

export default ProfileEventDiscription;
