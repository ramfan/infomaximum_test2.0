import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { Route, Switch } from 'react-router';
import GoToBack from '../../containers/Dashboard/GoToBack';
import CreateForm from './CreateForm';
import Profile from './Profile';


class CreateEvent extends PureComponent {
    render() {
        return (
            <Row style={this.props.theme.systemLayout}>
                <Col>
                    <Row style={{ marginBottom: '5%' }}>
                        <GoToBack where={'назад'} path={'/dashSys'}/>
                    </Row>
                    <Row>
                        <Switch>
                            <Route path={'/event/create'} component={CreateForm}/>
                            <Route path={'/event/profile/'} component={Profile}/>
                        </Switch>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(CreateEvent);
