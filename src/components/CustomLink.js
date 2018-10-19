/* eslint-disable max-len */
import React, { Component } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { NavLink } from 'react-router-dom';

class CustomLink extends Component {
    render() {
        const {
            activeColumn, activeSpan, disActiveSpan, disActiveColumn,
        } = this.props.theme.authForm;
        return (
            <NavLink to={this.props.to_path} activeStyle={activeColumn} style={disActiveColumn} activeClassName={false}>
                <span style={disActiveSpan('0')}>{this.props.itemName}</span>
            </NavLink>
        );
    }
}

export default withTheme(CustomLink);
