/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';

class NavItem extends PureComponent {
    render() {
        const style = !this.props.exit ? this.props.theme.Navigate.unExit : this.props.theme.Navigate.exit;
        return (
            <Col md={12} style={style}>
                <Row style={this.props.theme.clickElement}>
                    <Col md={1}>
                        <img src={this.props.Icon} alt=''/>
                    </Col>
                    <Col md={10}>{this.props.description}</Col>
                </Row>
            </Col>
        );
    }
}

export default withTheme(NavItem);
