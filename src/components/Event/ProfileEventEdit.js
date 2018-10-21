/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import edit from '../../assets/editIcon.svg';


class ProfileEventEdit extends PureComponent {
    render() {
        const { rootStyle, img, edit: editStyle } = this.props.theme.dashBoardSystem.ProfileEventEdit;
        return (
            <Row align={'center'} style={rootStyle}>
                <Col>
                    <span><img src={edit} style={img}/></span>
                    <span style={editStyle}>РЕДАКТИРОВАТЬ</span>
                </Col>
            </Row>
        );
    }
}

export default withTheme(ProfileEventEdit);
