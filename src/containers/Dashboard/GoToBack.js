import React, { PureComponent } from 'react';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import back from '../../assets/goToBack.svg';
import { actionCreators } from '../../duckStore';


class GoToBack extends PureComponent {
    constructor(props) {
        super(props);
        this.goToBack = this.goToBack.bind(this);
    }

    goToBack() {
        this.props.getCreateEvent(false);
    }

    render() {
        return (
            <Col style={this.props.theme.GoBack.rootStyle} onClick={this.goToBack}>
                <Route>
                    <Link to={this.props.path} style={this.props.theme.clickElement}>
                        <span style={this.props.theme.clickElement}>
                            <img src={back} style={this.props.theme.GoBack.img}/>
                        </span>
                        <span style={this.props.theme.clickElement}>
                    &nbsp;Вернуться&nbsp;{this.props.where}
                        </span>
                    </Link>
                </Route>
            </Col>
        );
    }
}
// eslint-disable-next-line no-class-assign
GoToBack = withTheme(GoToBack);
const { getCreateEvent } = actionCreators;
export default connect(null, { getCreateEvent })(GoToBack);
