import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import edit from '../../assets/editIcon.svg';


class ProfileEventEdit extends PureComponent {
    render() {
        return (
            <Row align={'center'} style={{ marginTop: '2%' }}>
                <Col>
                    <span><img src={edit} style={{ height: '14px' }}/></span>
                    <span style={{
                        fontSize: '14px', letterSpacing: '0.75px', color: '#EE0C28', paddingLeft: 'inherit',
                    }}>РЕДАКТИРОВАТЬ</span>
                </Col>
            </Row>
        );
    }
}

export default ProfileEventEdit;
