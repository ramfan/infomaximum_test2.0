/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';
import { Col, Row } from 'react-grid-system';

class Stats extends PureComponent {
    render() {
        const colors = ['#86CCFF', '#6202EE', '#FA15FF'];
        const statItems = [];
        for (let i = 0; i < this.props.prop.length; i += 1) {
            statItems.push(
                <Row justify={'between'} align='center'>
                    <Col md={1}>
                        <span style={this.props.theme.dashBoardSystem.Stats.dot(colors[i])}></span>
                    </Col>
                    <Col md={10}>
                        <span style={this.props.theme.dashBoardSystem.Stats.statItem}>{this.props.prop[i]}</span>
                    </Col>
                </Row>,
            );
        }
        return (
            <Row style={{
                marginLeft: 0, marginRight: 0, marginTop: '1%',
            }}>
                <Col md={12}>
                    <img src={this.props.icon} style={this.props.theme.dashBoardSystem.Stats.rootStyle}/>
                </Col>
                <Col md={4} offset={{ md: 2 }} style={this.props.theme.dashBoardSystem.Stats.rootStyle}>
                    <Row>
                        {statItems}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Stats);
