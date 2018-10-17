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
        console.log(this.props);
        return (
            <Col style={{ display: 'flex' }} onClick={this.goToBack}>
                <Route>
                    <Link to={'/dashSys'} style={this.props.theme.clickElement}>
                        <span style={this.props.theme.clickElement}>
                            <img src={back} style={{ height: '19px' }}/>
                        </span>
                        <span style={this.props.theme.clickElement}>
                    &nbsp;Вернуться назад
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
