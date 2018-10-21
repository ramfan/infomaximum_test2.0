import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

class CreateButton extends PureComponent {
    render() {
        const { create, cancel, rootStyle } = this.props.theme.CreateButton;
        return (
            <Row justify={'end'} style={rootStyle}>
                <Col md={2}>
                    <span style={cancel}>ОТМЕНА</span>
                </Col>
                <Col md={2}>
                    <Route>
                        <Link to={this.props.to_path} style={this.props.theme.linkStyle}>
                            <span style={create}>СОЗДАТЬ</span>
                        </Link>
                    </Route>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
CreateButton = withTheme(CreateButton);
export default connect(null, null)(CreateButton);
