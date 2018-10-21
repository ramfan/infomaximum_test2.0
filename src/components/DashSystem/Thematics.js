import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import vector from '../../assets/Vector.svg';

class Thematics extends PureComponent {
    render() {
        const thematics = [];
        for (let i = 0; i < this.props.thematics.length; i += 1) {
            thematics.push(
                <Row align={'center'} style={this.props.theme.dashBoardSystem.Thematics}>
                    <Col md={1}>
                        <img src={vector} alt=""/>
                    </Col>
                    <Col>
                        <span>{this.props.thematics[i]}</span>
                    </Col>
                </Row>,
            );
        }
        return (
            <Row>
                <Col md={12}>
                    {thematics}
                </Col>
            </Row>
        );
    }
}

export default withTheme(Thematics);
