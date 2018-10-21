import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Profile from '../Event/Profile';
import CreateForm from '../Event/CreateForm';
import GoToBack from '../../containers/Dashboard/GoToBack';
import CommandForm from '../../containers/Command/CommandForm';
import CreateCommand from './CreateCommand';

class Command extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.systemLayout}>
                <Col>
                    <Row style={this.props.theme.dashBoardParticipant.Command}>
                        <GoToBack where={'назад'} path={'/dashParticipant'}/>
                    </Row>
                    <Row>
                        <Switch>
                            <Route path={'/command/create'} component={CreateCommand}/>
                        </Switch>
                    </Row>
                </Col>
            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
Command = withTheme(Command);
export default connect(null, null)(Command);
