/* eslint-disable max-len,quote-props,prefer-const */
import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import CustomLink from '../CustomLink';

class ProfileSwitches extends Component {
    render() {
        const paths = [
            '/event/profile/detail',
            '/event/profile/participant',
            '/event/profile/emptyPath1',
            '/event/profile/emptyPath2'];
        const labels = ['ОБЩАЯ ИНФОРМАЦИЯ', 'УЧАСТНИКИ', 'КОМАНДЫ', 'ПРОЕКТЫ'];
        const switches = [];
        for (let i = 0; i < 4; i += 1) {
            switches.push(
                <Col style={this.props.theme.paddingNull}>
                    <CustomLink to_path={paths[i]} itemName={labels[i]}/>
                </Col>,
            );
        }
        return (
            <Col style={{
                padding: '30px', marginTop: '1%',
            }}>
                <Row>
                    {
                        switches
                    }
                </Row>
            </Col>
        );
    }
}

export default withTheme(ProfileSwitches);
